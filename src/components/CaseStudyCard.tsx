'use client'
import { useRouter } from 'next/navigation'
import TagChip from './TagChip'
import { CaseStudy } from '../../content/caseStudies'

const statusLabel: Record<string, string> = {
  live: 'Live',
  'coming-soon': 'Coming Soon',
}

const statusDot: Record<string, string> = {
  live: '#4ade80',
  'coming-soon': '#C8A96E',
}

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/work/${study.slug}`)}
      style={{
        backgroundColor: 'var(--white)',
        borderColor: 'var(--light-gray)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      className="group border rounded-sm overflow-hidden hover:shadow-lg"
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor =
          'var(--gold)'
        ;(e.currentTarget as HTMLDivElement).style.transform =
          'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor =
          'var(--light-gray)'
        ;(e.currentTarget as HTMLDivElement).style.transform =
          'translateY(0)'
      }}
    >
      {/* Cover image area */}
      <div
        style={{
          backgroundColor: 'var(--obsidian)',
          height: '200px',
          position: 'relative',
        }}
        className="w-full overflow-hidden"
      >
        {study.coverImage ? (
          <img
            src={study.coverImage}
            alt={study.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, var(--obsidian) 0%, #0f1623 60%, #1a1f2e 100%)`,
              display: 'flex',
              alignItems: 'flex-end',
              padding: '20px',
            }}
          >
            <span
              style={{
                fontFamily: 'Georgia, serif',
                color: 'var(--gold)',
                opacity: 0.3,
                fontSize: '48px',
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              {study.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Status badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(8, 12, 20, 0.85)',
            border: '1px solid rgba(200, 169, 110, 0.3)',
            borderRadius: '2px',
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor:
                statusDot[study.status] || '#9ca3af',
            }}
          />
          <span
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'var(--cream)',
              textTransform: 'uppercase',
            }}
          >
            {statusLabel[study.status] || study.status}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 24px 24px' }}>
        <h3
          style={{
            fontFamily: 'Georgia, serif',
            color: 'var(--obsidian)',
            fontSize: '20px',
            marginBottom: '8px',
            lineHeight: 1.2,
          }}
        >
          {study.title}
        </h3>
        <p
          style={{
            fontFamily: 'Arial, sans-serif',
            color: 'var(--mid-gray)',
            fontSize: '14px',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}
        >
          {study.subtitle}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {study.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

