const express = require('express');
const app = express();

app.use(express.json());

// Mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('¡Servidor de Miitomo ProyectA activo!');
});

// Rutas clave de autenticación para que Miitomo no dé error 801
app.post('/v1/device_accounts', (req, res) => {
  res.json({
    id: "1234567890",
    password: "password_super_secreta"
  });
});

app.post('/v1/tokens', (req, res) => {
  res.json({
    token: "token_de_acceso_simulado",
    expires_in: 3600
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
