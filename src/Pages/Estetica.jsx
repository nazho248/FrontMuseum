import React, {Fragment} from "react";
import { Link } from 'react-router-dom';
import {BackBtn} from "../BackBtn";
import {LeftSide} from "../components/estetica/LeftSide";
import {RightSide} from "../components/estetica/RightSide";


export function Estetica() {
    document.body.id = "";

    return (
        <Fragment>
            <BackBtn/>
            <div className="flex bg-gray-600">
                <LeftSide/>
                <RightSide/>
            </div>
        </Fragment>
    )
}