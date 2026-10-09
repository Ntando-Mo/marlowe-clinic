export default function LiveRegion({ message }) {
  return (
    <div className="sr-status" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  )
}
