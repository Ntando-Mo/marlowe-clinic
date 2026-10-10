import { useMemo, useRef, useState } from 'react'
import FilterControls from '../components/FilterControls'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import useFocusOnViewChange from '../hooks/useFocusOnViewChange'

export default function ServicesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [triage, setTriage] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(true)
  const headingRef = useRef(null)
  const previousResultCount = useRef(services.length)

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return services.filter((service) => {
      const matchesQuery = !normalizedQuery || `${service.name} ${service.category} ${service.description}`.toLowerCase().includes(normalizedQuery)
      const matchesCategory = category === 'All' || service.category === category
      const matchesTriage = triage === 'All' || service.triage === triage
      return matchesQuery && matchesCategory && matchesTriage
    })
  }, [query, category, triage])

  useFocusOnViewChange(headingRef, `${category}-${triage}`)

  const resultChanged = previousResultCount.current !== filteredServices.length
  if (resultChanged) previousResultCount.current = filteredServices.length

  return (
    <main id="main-content" className="section container" tabIndex="-1">
      <header className="page-heading">
        <p className="eyebrow">Clinical service directory</p>
        <h1 ref={headingRef} tabIndex="-1">Find a healthcare service</h1>
        <p>Search the directory, then use the filters to narrow services by category or triage priority.</p>
      </header>

      <section className="search-panel" aria-labelledby="search-heading">
        <h2 id="search-heading">Search services</h2>
        <label htmlFor="service-search">Search by service name or description</label>
        <input
          id="service-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="For example, child health"
        />
      </section>

      <FilterControls
        isOpen={isFilterOpen}
        onToggle={() => setIsFilterOpen((open) => !open)}
        category={category}
        setCategory={setCategory}
        triage={triage}
        setTriage={setTriage}
      />

      <div className="results-header" aria-live="polite">
        <h2 id="results-heading">Service results</h2>
        <p>{filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} found{resultChanged ? '.' : '.'}</p>
      </div>

      {filteredServices.length > 0 ? (
        <section className="service-list" aria-labelledby="results-heading">
          {filteredServices.map((service) => <ServiceCard key={service.id} service={service} />)}
        </section>
      ) : (
        <section className="empty-state" aria-labelledby="no-results-heading">
          <h2 id="no-results-heading">No services found</h2>
          <p>Try a different search term or reset one of the filters.</p>
          <button className="button" type="button" onClick={() => { setQuery(''); setCategory('All'); setTriage('All') }}>
            Clear filters
          </button>
        </section>
      )}
    </main>
  )
}
