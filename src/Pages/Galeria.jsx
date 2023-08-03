import { Fragment, useEffect, useState } from "react";
import { BackBtn } from "../BackBtn";
import { Main_Image } from "../components/galeria/Main_Image";
import { Right_Nav } from "../components/galeria/Right_Nav";

export function Galeria() {
    const [currentImage, setCurrentImage] = useState(
        "assets/img/ilustraciones/pieza_guane_4_indigena_con_las_hormigas.jpg"
    );

    return (
        <Fragment>
            <BackBtn />
            <div className="gallery bg-slate-800">
                <Main_Image currentImage={currentImage} setCurrentImage={setCurrentImage} />
                <Right_Nav setCurrentImage={setCurrentImage} />
            </div>
        </Fragment>
    );
}
