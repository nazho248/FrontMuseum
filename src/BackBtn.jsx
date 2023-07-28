import React from "react";
import { Link } from 'react-router-dom';
export function BackBtn() {
    return (
        <Link className="back-button px-5 none-link bg-real-800" to="/">
            <button className="back-button" type="button">
                <span className="arrow"/>
            </button>
        </Link>

    )
}