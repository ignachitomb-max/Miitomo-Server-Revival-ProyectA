const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Manejador para cualquier ruta que pida Miitomo
app.all('*', (req, res) => {
    console.log(`[PETICIÓN] Método: ${req.method} | Ruta solicitada: ${req.originalUrl}`);
    
    // Si el juego pide configuración o autenticación inicial, le devolvemos 
    // un JSON más completo para intentar engañar al cliente de la 1.0.0
    res.status(200).json({
        status: "ok",
        code: 0,
        result: {
            server_time: Math.floor(Date.now() / 1000),
            maintenance: false,
            message: "Welcome to custom Miitomo server"
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Miitomo corriendo en el puerto ${PORT}`);
});
