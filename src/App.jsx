// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import './styles/App.css';
import AnimatedRoutes from "./components/AnimatedRoutes";

//import fragments


export function App() {
    //como llamar variables de entorno
    /*<h3>{process.env.REACT_APP_IMAGE_BASE_URL}</h3>*/
    return (
        <Router>
            <AnimatedRoutes/>
        </Router>
    );
}
