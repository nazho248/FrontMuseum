import React, {Fragment} from "react";
import { Link } from 'react-router-dom';


export function Estetica() {
    document.body.id = "esteticapage";
    return (
        <Fragment>
        <h2>Estetica</h2>
            <h3>{process.env.REACT_APP_IMAGE_BASE_URL}</h3>
        <Link to="/">Home</Link>
        </Fragment>
    )
}