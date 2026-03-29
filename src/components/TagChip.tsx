export default function TagChip({ tag }: { tag: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-body), Arial, sans-serif',
        fontSize: '11px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        /* WCAG AA on cream-dark (#EAE3D8); mid-gray alone was ~3.79:1 */
        color: "rgba(8, 12, 20, 0.78)",
        backgroundColor: 'var(--cream-dark)',
        border: '1px solid var(--light-gray)',
        borderRadius: '2px',
        padding: '3px 8px',
        display: 'inline-block',
      }}
    >
      {tag}
    </span>
  )
}

