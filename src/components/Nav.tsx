import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      style={{
        backgroundColor: 'var(--obsidian)',
        borderBottom: '1px solid rgba(200, 169, 110, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
      className="w-full px-8 md:px-16 py-5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          style={{
            fontFamily: 'Georgia, serif',
            color: 'var(--cream)',
            fontSize: '16px',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Hannah Pagade
        </Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link
            href="/about"
            style={{
              fontFamily: 'Arial, sans-serif',
              color: 'var(--cream)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              opacity: 0.6,
            }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

