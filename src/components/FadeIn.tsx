"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function reveal(el: HTMLDivElement) {
  el.style.opacity = "1";
  el.style.transform = "translateY(0)";
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      reveal(el);
      return;
    }

    // Above-the-fold: IntersectionObserver can miss the first paint on some
    // browsers; show immediately if any part of the element is in view.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const inView = rect.top < vh + 80 && rect.bottom > -80;
    if (inView) {
      reveal(el);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal(el);
          observer.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
