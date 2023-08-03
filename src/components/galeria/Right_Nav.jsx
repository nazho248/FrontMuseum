import {Fragment, useState} from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

export function Right_Nav({ setCurrentImage }) {
    const [showThumbmails, setShowThumbmails] = useState(true);

    const handleExpandImagesBtnClick = () => {
        setShowThumbmails((prevShowThumbmails) => !prevShowThumbmails);
        //ponerle a body la clase hide-thumbnails
        if (showThumbmails) {
            document.body.classList.add("hide-thumbnails");
        } else {
            document.body.classList.remove("hide-thumbnails");
        }
    }
    const handleThumbnailClick = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    return (
        <Fragment>
            {/* cerrar/abrir panel */}
            <div className="expand-images-btn" onClick={handleExpandImagesBtnClick}>
                {showThumbmails ? (
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <BiChevronRight className="text-slate-100" size={32} />
                    </motion.div>
                ) : (
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <BiChevronLeft className="text-slate-100" size={32} />
                    </motion.div>
                )}
                <i className='bx bxs-chevron-right bx-sm'></i>
            </div>
            {/* Resto del código ... */}
            <div className="thumbnails">
                <div className="thumbnails-container">
                    <img
                        src="assets/img/ilustraciones/pieza_guane_4_indigena_con_las_hormigas.jpg"
                        alt="Thumbnail 1"
                        onClick={() =>
                            handleThumbnailClick(
                                "assets/img/ilustraciones/pieza_guane_4_indigena_con_las_hormigas.jpg"
                            )
                        }
                    />
                    <img
                        src="assets/img/ilustraciones/piezas_guane_1_caldero.jpg"
                        alt="Thumbnail 2"
                        onClick={() =>
                            handleThumbnailClick(
                                "assets/img/ilustraciones/piezas_guane_1_caldero.jpg"
                            )
                        }
                    />
                    <img
                        src="assets/img/ilustraciones/piezas_guanes_2_casa_e_indigena.jpg"
                        alt="Thumbnail 3"
                        onClick={() =>
                            handleThumbnailClick(
                                "assets/img/ilustraciones/piezas_guanes_2_casa_e_indigena.jpg"
                            )
                        }
                    />
                    <img
                        src="assets/img/ilustraciones/piezas_guanes_3_bodegon_peses_ormigas_ollas_etc.jpg"
                        alt="Thumbnail 4"
                        onClick={() =>
                            handleThumbnailClick(
                                "assets/img/ilustraciones/piezas_guanes_3_bodegon_peses_ormigas_ollas_etc.jpg"
                            )
                        }
                    />
                    {/* más miniaturas... */}
                </div>
            </div>
        </Fragment>
    );
}
