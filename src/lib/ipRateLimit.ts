/**
 * In-memory per-IP sliding-window rate limiting for serverless-friendly abuse control.
 * Prunes stale keys periodically so the map does not grow without bound.
 */
export function getRequestIp(req: { headers: Headers }): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function pruneStaleKeys(
  map: Map<string, number[]>,
  now: number,
  windowMs: number
): void {
  for (const [key, hits] of map) {
    const recent = hits.filter((t) => now - t < windowMs);
    if (recent.length === 0) map.delete(key);
    else map.set(key, recent);
  }
}

export function createIpRateLimiter(maxPerWindow: number, windowMs: number) {
  const ipHits = new Map<string, number[]>();
  let requestCount = 0;

  return function isRateLimited(ip: string): boolean {
    const now = Date.now();
    requestCount += 1;
    if (requestCount % 48 === 0) {
      pruneStaleKeys(ipHits, now, windowMs);
    }

    const hits = ipHits.get(ip) ?? [];
    const recent = hits.filter((t) => now - t < windowMs);
    if (recent.length >= maxPerWindow) {
      ipHits.set(ip, recent);
      return true;
    }
    recent.push(now);
    ipHits.set(ip, recent);
    return false;
  };
}
