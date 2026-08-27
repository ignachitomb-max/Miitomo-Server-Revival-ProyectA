const express = require('express');
const app = express();

// Middleware para leer datos JSON o URL-encoded si el juego los envía
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware comodín: Atrapa ABSOLUTAMENTE TODO al instante
app.all('*', (req, res) => {
    // Imprime en la consola de Render la ruta exacta que el juego intentó buscar
    console.log(`[PETICIÓN CAPTURADA] Método: ${req.method} | Ruta: ${req.originalUrl}`);
    
    // Responde de inmediato con un JSON genérico para que el juego no se crashee por timeout
    res.status(200).json({
        status: "success",
        message: "Servidor de Miitomo activo y respondiendo"
    });
});

// Configura el puerto que exige Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Miitomo corriendo en el puerto ${PORT}`);
});
