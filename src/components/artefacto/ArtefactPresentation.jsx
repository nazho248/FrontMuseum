import { motion } from "framer-motion";

export function ArtefactPresentation() {
  const estilo = {
    backgroundImage: "url(/assets/img/arqueologia.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="flex flex-col w-11/12 p-10 max-h-screen justify-center"
      style={estilo}
    >
      {/*contenido dentro de la imagen*/}
      <div
        className="absolute border-2 lg:border-4 border-dashed border-white rounded-lg  text-white top-1/4 right-1/4 text-xl lg:text-4xl text-center py-5 px-8 transform  translate-x-20"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        Navega Entre Nuestra <br /> Muestra Virtual
      </div>
      <motion.div
        className="absolute left-1/3 bottom-0 mb-5 lg:mb-20"
        animate={{ scale: [1, 1.1, 1] }}
        whileHover={{
          scale: 1.2,
          border: "5px solid #FEC400",
          borderRadius: "10px",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            repeat: null,
            duration: 2,
          },
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <a href="/Re-Leyendo Arte-Factos_2023.pdf" target={"_blank"}>
          <button className="bg-white text-black rounded-md py-4 lg:py-10 px-5 lg:px-16 font-bold  text-base lg:text-xl">
            Visita Nuestro Catálogo en Línea
          </button>
        </a>
      </motion.div>
    </div>
  );
}
