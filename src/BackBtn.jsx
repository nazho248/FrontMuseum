import React from "react";
import { Link } from 'react-router-dom';
export function BackBtn() {
    return (
        <Link className="none-link bg-real-800 transform scale-75 lg:scale-100" to="/">
            <button className="back-button" type="button">
                <span className="arrow" />
            </button>
        </Link>

    )
}