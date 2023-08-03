import {Route, Routes, useLocation} from "react-router-dom";
import {Estetica} from "../Pages/Estetica";
import {Tiempo} from "../Pages/Tiempo";
import {Artefacto} from "../Pages/Artefacto";
import {Galeria} from "../Pages/Galeria";
import {NotFound} from "../Pages/NotFound";
import HomePage from "../Pages/HomePage";
import React from "react";

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    const tiempoRegex = /^(text|img)$/;
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/index" element={<HomePage/>}/>
                <Route path="/Estetica" element={<Estetica/>}/>

                <Route path="/Tiempo/:year/:type" element={<Tiempo/>}/>
                <Route path="/Tiempo/:year" element={<Tiempo/>}/>
                <Route path="/Tiempo" element={<Tiempo/>}/>

                <Route path="/Artefacto/:id" element={<Artefacto/>}/>
                <Route path="/Artefacto/:id" element={<Artefacto/>}/>
                <Route path="/Artefacto/" element={<Artefacto/>}/>
                <Route path="/Galeria" element={<Galeria/>}/>
                {/* 404 page */}
                <Route path="*" element={<NotFound/>}/>
                <Route path="/404" element={<NotFound/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;