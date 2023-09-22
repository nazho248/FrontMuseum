import { motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export function TimeImages(props) {
  const navigate = useNavigate();

  const atrasredirect = "/Tiempo/" + props.data.epoca + "/info";

  const siguiente = "/Tiempo/" + props.data.epoca_ant + "/info";
  return (
    <div className="flex w-screen flex-row mx-auto bottom-0 h-full pt-24 gap-x-14 justify-center items-center text-white text-center max-h-full">
      <h1 className="text-white absolute text-xl lg:text-5xl top-14 lg:top-32">
        {props.data.titulo}
      </h1>
      {/*flecha izquierda <- */}
      {props.ultimo ? (
        <motion.div
          className="flex w-14 mb-14 mt-4 border-b-2 lg:border-b-4 border-slate-50 cursor-pointer  text-white"
          onClick={() => {
            navigate(siguiente);
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: 18 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <SlArrowLeft className="absolute transform -translate-y-4 lg:-translate-y-7 -translate-x-3 lg:-translate-x-4 text-4xl lg:text-6xl" />
        </motion.div>
      ) : null}

      <div
        className={
          "flex " +
          (props.ultimo ? "w-10/12" : "w-9/12") +
          " space-x-10 mb-10 mx-auto justify-center items-center"
        }
      >
        {props.data.imagenes.map((imagen, index) => (
          <div
            className="flex w-1/2 justify-center items-center h-48"
            key={index}
          >
            <div
              className="border border-gray-200 rounded-lg shadow"
              style={{
                backgroundColor: "rgba(255,255,255,0.67)",
                height: "100%",
              }}
            >
              <img
                className="rounded-t-lg w-full h-4/6 3 object-contain"
                src={"../../assets/img/Timeline/" + imagen.imagen}
                alt=""
              />
              <div className="p-2 pb-0 lg:p-5 lg:pb-5 h-2/6 overflow-hidden">
                <p className="mb-3 font-normal text-gray-700 text-xs lg:text-base">
                  {imagen.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*flecha derecha ->*/}
      <motion.div
        className="flex w-14 mb-14 mt-4 border-b-2 lg:border-b-4  border-slate-50 cursor-pointer text-white"
        onClick={() => {
          navigate(atrasredirect);
        }}
        initial={{ translateX: 0 }}
        animate={{ translateX: -18 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <SlArrowRight className="absolute text-4xl lg:text-6xl  transform -translate-y-4 translate-x-7" />
      </motion.div>
    </div>
  );
}
