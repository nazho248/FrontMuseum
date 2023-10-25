// App.js
import React, { StrictMode } from 'react'
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
  const { isLoaded, loading, loadedImages } = UseLoading()
  const forceRender = useOrientation()
  //para pantalla completa
  const handle = useFullScreenHandle()

  return (
    <Router>
      <StrictMode>
        <div onClick={!handle.active ? handle.enter : null}>
          {/*
          <FullScreen handle={handle}>
*/}
          <OrientationChecker key={forceRender}>
            {!isLoaded && <LoadingScreen percentage={loading} />}
            {isLoaded && <AnimatedRoutes loadedImages={loadedImages} />}
          </OrientationChecker>
          {/*
          </FullScreen>
*/}
        </div>
      </StrictMode>
    </Router>
  )
}

export default React.memo(App)
