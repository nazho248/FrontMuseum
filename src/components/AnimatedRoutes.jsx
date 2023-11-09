import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Estetica } from '../Pages/Estetica'
import { Tiempo } from '../Pages/Tiempo'
import { Artefacto } from '../Pages/Artefacto'
import { Galeria } from '../Pages/Galeria'
import { NotFound } from '../Pages/NotFound'
import HomePage from '../Pages/HomePage'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import ArgumentedReality from '../Pages/ArgumentedReality'
import Pruebas from '../AR/Pruebas'

export const RemoveTrailingSlash = ({ ...rest }) => {
  const location = useLocation()

  // If the last character of the url is '/'
  if (location.pathname.match('/.*/$')) {
    return (
      <Navigate
        replace
        {...rest}
        to={{
          pathname: location.pathname.replace(/\/+$/, ''),
          search: location.search,
        }}
      />
    )
  } else return null
}

function AnimatedRoutes({ loadedImages, webxr, setwebxr, firstime, setfirstime, ...props }) {
  const location = useLocation()
  //const tiempoRegex = /^(text|img)$/
  return (
    <AnimatePresence>
      <RemoveTrailingSlash />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage loadedImages={loadedImages} firstime={firstime} />} />
        <Route path="/index" element={<HomePage loadedImages={loadedImages} firstime={firstime} />} />

        <Route path="/Estetica" element={<Estetica />} />
        <Route path="/Estetica/:id" element={<Estetica />} />

        <Route path="/Tiempo/:year/:type" element={<Tiempo key_bg={0} />} />
        <Route path="/Tiempo/:year" element={<Tiempo key_bg={0} />} />
        <Route path="/Tiempo" element={<Tiempo key_bg={0} />} />

        <Route path="/Artefacto/:id" element={<Artefacto webxr={webxr} setwebxr={setwebxr} />} />
        <Route path="/Artefacto/:id" element={<Artefacto webxr={webxr} setwebxr={setwebxr} />} />
        <Route path="/Artefacto/" element={<Artefacto webxr={webxr} setwebxr={setwebxr} />} />
        <Route path="/Galeria" element={<Galeria />} />
        {/*ruta especial :3*/}
        <Route path="/AR" element={<ArgumentedReality />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
