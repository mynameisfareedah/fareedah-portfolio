import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }))
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, search])

  return null
}

export default ScrollToTop
