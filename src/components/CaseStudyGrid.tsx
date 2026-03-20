import { caseStudies } from '@/content/caseStudies'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudyGrid() {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order)

  return (
    <section
      id="work"
      style={{ backgroundColor: 'var(--cream)' }}
      className="w-full px-8 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '12px',
            }}
          >
            Selected Work
          </p>
          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--gold)',
              opacity: 0.5,
            }}
          />
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {sorted.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}

