import { Link } from 'react-router-dom'
import AvailabilityList from './AvailabilityList'

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-topline">
        <span className="tag">{service.category}</span>
        <span className="tag tag-neutral">{service.triage} priority</span>
      </div>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <AvailabilityList practitioners={service.practitioners} />
      <Link 
        className="button button-secondary" 
        to={`/booking?service=${service.id}`}
        aria-label={`View details and book an appointment for ${service.name}`}
      >
        View details and book
      </Link>
    </article>
  )
}