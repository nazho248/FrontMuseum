import { BiInfoCircle } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from "framer-motion";

export function Main_Image({ currentImage, setCurrentImage }) {
    const [isTextHidden, setTextHidden] = useState(true);
    const controls = useAnimationControls();

    const handleInfoCircleClick = () => {
        setTextHidden((prevTextHidden) => !prevTextHidden);
    };

    const variants = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.3
            }
        },
        hide: {
            x: "100vw",
            opacity: 0
        },
        exit: {
            opacity: 0,
            y: 2000,
            transition: {
                ease: 'easeOut',
                duration: 0.3
            }
        }
    };

    useEffect(() => {;
    }, [currentImage, controls]);

    return (
        <div
            className="main-image">
            <motion.img src={currentImage} alt="Main Image"
                        key={currentImage}
                        variants={variants}
                        animate={'show'}
                        initial={'hide'}
                        exit={'exit'}
                        lazyload={true}

            />
            <motion.div
                className="info-floating"
                onClick={handleInfoCircleClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <BiInfoCircle className="text-slate-100" size={28} />
            </motion.div>
            <div className={`image-text ${isTextHidden ? "hidden-text" : ""}`}>
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
