import { categories, triageOptions } from '../data/services'

export default function FilterControls({ isOpen, onToggle, category, setCategory, triage, setTriage }) {
  return (
    <section className="filter-panel" aria-labelledby="filter-heading">
      <button
        type="button"
        className="filter-toggle"
        aria-expanded={isOpen}
        aria-controls="service-filters"
        onClick={onToggle}
      >
        <span id="filter-heading">Triage and category filters</span>
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div id="service-filters" hidden={!isOpen} className="filter-content">
        <fieldset>
          <legend>Category</legend>
          <div className="filter-buttons" role="group" aria-label="Service category">
            {categories.map((option) => (
              <button
                key={option}
                type="button"
                className="filter-chip"
                aria-pressed={category === option}
                onClick={() => setCategory(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Triage priority</legend>
          <div className="filter-buttons" role="group" aria-label="Triage priority">
            {triageOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="filter-chip"
                aria-pressed={triage === option}
                onClick={() => setTriage(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  )
}
