import { useState, useEffect } from 'react'

export function useOrientation() {
  const [forceRender, setForceRender] = useState(0)

  useEffect(() => {
    const handleOrientationChange = () => {
      setForceRender(prev => prev + 1)
    }
    window.addEventListener('orientationchange', handleOrientationChange)
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])
  return forceRender
}
