import { useState, useEffect } from 'react'
import RotateDevice from './components/RotateDevice'

export default function OrientationChecker({ children }) {
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    checkOrientation()
    window.addEventListener('resize', checkOrientation)

    return () => {
      window.removeEventListener('resize', checkOrientation)
    }
  }, [])

  //cada 3 segundos revisar si esta en portrait o landscape sin usse effect

  function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
      setIsPortrait(true)
    } else {
      setIsPortrait(false)
    }
  }

  return isPortrait ? <RotateDevice /> : children
}
