const express = require('express');
const app = express();

app.use(express.json());

// Encabezados globales obligatorios para la app de Nintendo
app.use((req, res, next) => {
    res.header("X-Nintendo-Date", Math.floor(Date.now() / 1000));
    next();
});

// Ruta raíz de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor de Miitomo ProyectA activo!');
});

// 1. Creación/Verificación de dispositivo (BaaS)
app.post('/v1/device_accounts', (req, res) => {
    res.status(200).json({
        id: "1234567890123456",
        password: "password_super_secreta_miitomo"
    });
});

// 2. Obtención del Access Token (BaaS)
app.post('/v1/tokens', (req, res) => {
    res.status(200).json({
        token: "token_de_acceso_simulado_miitomo",
        expires_in: 86400
    });
});

// 3. Obtención de datos del usuario
app.get('/v1/users/me', (req, res) => {
    res.status(200).json({
        user: {
            id: "1234567890123456",
            nickname: "Jugador"
        }
    });
});

// Manejador comodín para capturar cualquier otra ruta que pida el APK
app.use((req, res) => {
    console.log(`[PETICION NO MAPEADA]: ${req.method} ${req.originalUrl}`);
    res.status(200).json({});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Miitomo corriendo en puerto ${PORT}`);
});
