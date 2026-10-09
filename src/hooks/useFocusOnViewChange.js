import { useEffect } from 'react'

export default function useFocusOnViewChange(ref, dependency) {
  useEffect(() => {
    ref.current?.focus()
  }, [dependency, ref])
}
