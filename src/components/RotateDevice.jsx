import { motion } from 'framer-motion'

const RotateDevice = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#263238', // Puedes personalizar el fondo de tu pantalla de carga
        color: '#ffffff', // Puedes personalizar el color de tu pantalla de carga
        zIndex: 9999, // Asegura que esté por encima de otros elementos
      }}
      //inicial moviendose hacia arriba
      initial={{ x: 500, opacity: 0 }}
      //2 segundos
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
    >
      {/* Aquí puedes agregar elementos para mostrar la animación de carga (por ejemplo, un spinner) */}
      <div className="flex h-full w-full flex-col items-center justify-center">
        <motion.div
          className={'phone'}
          style={{
            height: '50px',
            width: '100px',
            border: '3px solid white',
            borderRadius: '10px',
          }}
          animate={{
            rotate: [-90, 0, 0, -90],
            transition: { duration: 2, repeat: Infinity, repeatType: 'mirror' },
          }}
        ></motion.div>

        <div className="mt-14 text-center">
          <h1 className="mb-4 text-xl font-bold">Por favor gira tu dispositivo.</h1>
          <p className="text-lg">Esta aplicación está optimizada para uso en horizontal.</p>
          <p className="text-lg">Gira tu teléfono para continuar.</p>
        </div>

        {/*div posicionado con una imagen en la parte inferior*/}
        <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 transform">
          <img
            src="/assets/img/icons/sol_icon.png"
            alt="rotate device"
            className="w-7/12"
            style={{
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>

        <div className="absolute bottom-0 right-0 flex translate-x-1/4 translate-y-1/4 transform justify-end">
          <img
            src="/assets/img/icons/sol_icon.png"
            alt="rotate device"
            className="w-10/12"
            style={{
              filter: 'brightness(0) invert(1)',
              opacity: '0.4',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default RotateDevice
