export default function TagChip({ tag }: { tag: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-body), Arial, sans-serif',
        fontSize: '11px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--mid-gray)',
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

