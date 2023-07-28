// LoadingScreen.js
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    document.body.id = 'LoadingScreen';

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
                background: '#000000', // Puedes personalizar el fondo de tu pantalla de carga
                color: '#ffffff', // Puedes personalizar el color de tu pantalla de carga
                zIndex: 9999, // Asegura que esté por encima de otros elementos
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Aquí puedes agregar elementos para mostrar la animación de carga (por ejemplo, un spinner) */}
            <div>¡Cargando...</div>
        </motion.div>
    );
};

export { LoadingScreen }; // Exporta el componente LoadingScreen como una exportación nombrada
