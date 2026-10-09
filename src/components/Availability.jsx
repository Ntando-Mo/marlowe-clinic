export default function AvailabilityList({ practitioners }) {
  return (
    <section className="availability" aria-labelledby="availability-heading">
      <h3 id="availability-heading">Practitioner availability</h3>
      <ul>
        {practitioners.map((practitioner) => (
          <li key={practitioner.name}>
            <strong>{practitioner.name}</strong>
            <span>{practitioner.days} · {practitioner.times}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
