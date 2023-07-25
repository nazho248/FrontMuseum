// App.js
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './HomePage';
import {Estetica} from './Estetica';

//import fragments


export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/index" element={<HomePage />} />
                <Route path="/Estetica" element={<Estetica />} />
                {/*si no existe enviar /404*/}
                <Route path="*" element={<h1>No se Ha Encontrado El Destino :(</h1>} />
            </Routes>
        </Router>
    );
}
