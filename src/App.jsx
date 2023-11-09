// App.js
import React, { StrictMode, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/App.css'
import AnimatedRoutes from './components/AnimatedRoutes'
import OrientationChecker from './OrientationChecker'
import { LoadingScreen } from './components/LoadingScreen'
import { UseLoading } from './hooks/UseLoading'
import { useOrientation } from './hooks/UseOrientation'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

//import fragments

export const App = () => {
  const [isWebXRActive, setIsWebXRActive] = useState(false)
  const { isLoaded, loading, loadedImages } = UseLoading()
  const forceRender = useOrientation()
  const handle = useFullScreenHandle()

  const attemptEnterFullScreen = () => {
    if (!handle.active && !isWebXRActive) {
      handle.enter()
    }
  }

  return (
    <Router>
      <StrictMode>
        <div onClick={attemptEnterFullScreen}>
          <FullScreen handle={handle}>
            <OrientationChecker key={forceRender}>
              {!isLoaded && <LoadingScreen percentage={loading} />}
              {isLoaded && (
                <AnimatedRoutes loadedImages={loadedImages} webxr={isWebXRActive} setwebxr={setIsWebXRActive} />
              )}
            </OrientationChecker>
          </FullScreen>
        </div>
      </StrictMode>
    </Router>
  )
}

export default React.memo(App)
