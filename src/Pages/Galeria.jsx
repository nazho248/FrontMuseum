import {Fragment} from "react";
import {BackBtn} from "../BackBtn";
import {Main_Image} from "../components/galeria/Main_Image";
import {Right_Nav} from "../components/galeria/Right_Nav";

export function Galeria() {
    return (
        <Fragment>
            <BackBtn/>
            <div className="gallery bg-slate-800">
                <Main_Image/>
                <Right_Nav/>
            </div>
        </Fragment>
    )
}