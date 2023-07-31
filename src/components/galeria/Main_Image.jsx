import { BiInfoCircle } from 'react-icons/bi';
import React, { useState } from 'react';
import {motion} from 'framer-motion'

export function Main_Image() {
    const [isTextHidden, setTextHidden] = useState(true);

    const handleInfoCircleClick = () => {
        setTextHidden((prevTextHidden) => !prevTextHidden);
    };

    return (
        <div className="main-image">
            <img src="assets/img/ilustraciones/pieza_guane_4_indigena_con_las_hormigas.jpg" alt="Main Image" />
            <motion.div className="info-floating" onClick={handleInfoCircleClick} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <BiInfoCircle className="text-slate-100" size={28} />
            </motion.div>
            <div className={`image-text ${isTextHidden ? 'hidden-text' : ''}`}>
                <p className="text-white">
                    Pellentesque vulputate volutpat neque. In pretium sapien id pellentesque imperdiet. Praesent ut ipsum auctor,
                    facilisis erat at, bibendum lorem. Vivamus efficitur pretium eros, sit amet maximus lorem molestie eget. Sed
                    tortor metus, ullamcorper nec accumsan quis, euismod vestibulum risus. Sed ornare lorem quam, vitae ultricies
                    nisl dignissim lobortis. Nullam quis pretium nunc. Mauris tempus tincidunt arcu sed dapibus.
                </p>
            </div>
        </div>
    );
}
