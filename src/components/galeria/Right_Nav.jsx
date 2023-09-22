import { Fragment, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

export function Right_Nav({ setCurrentImage, images }) {
  const [showThumbmails, setShowThumbmails] = useState(true);

  const handleExpandImagesBtnClick = () => {
    setShowThumbmails((prevShowThumbmails) => !prevShowThumbmails);
    //ponerle a body la clase hide-thumbnails
    if (showThumbmails) {
      document.body.classList.add("hide-thumbnails");
    } else {
      document.body.classList.remove("hide-thumbnails");
    }
  };
  const handleThumbnailClick = (imageId) => {
    setCurrentImage(imageId);
  };

  return (
    <Fragment>
      {/* cerrar/abrir panel */}
      <div className="expand-images-btn" onClick={handleExpandImagesBtnClick}>
        {showThumbmails ? (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <BiChevronRight className="text-slate-100" size={32} />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <BiChevronLeft className="text-slate-100" size={32} />
          </motion.div>
        )}
        <i className="bx bxs-chevron-right bx-sm"></i>
      </div>

      <div className="thumbnails">
        <div className="thumbnails-container">
          {images.map((image, index) => (
            <img
              src={"assets/img/galeria/" + image.imgsrc}
              alt="Thumbnail 1"
              onClick={() => handleThumbnailClick(image.id)}
            />
          ))}

          {/* más miniaturas... */}
        </div>
      </div>
    </Fragment>
  );
}
