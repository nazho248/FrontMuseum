import {BackBtn} from "../BackBtn";
import {Fragment} from "react";
import {TimeHeaader} from "../components/tiempo/TimeHeaader";
import {Timeline} from "../components/tiempo/Timeline";

export function Tiempo() {
    document.body.id = "timeline";
    return (
        <Fragment>
            <BackBtn/>
            <TimeHeaader/>
            <Timeline/>



        </Fragment>
    )
}