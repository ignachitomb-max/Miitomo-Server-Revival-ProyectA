const express = require('express');
const app = express();

app.use(express.json());

// Respuesta global para agregar encabezados requeridos por Miitomo
app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.header("X-Nintendo-Date", new Date().getTime().toString());
  next();
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Servidor de Miitomo ProyectA activo!');
});

// Autenticación de dispositivo
app.post('/v1/device_accounts', (req, res) => {
  res.json({
    id: "1234567890123456",
    password: "password_super_secreta_miitomo"
  });
});

// Generación de Tokens
app.post('/v1/tokens', (req, res) => {
  res.json({
    token: "token_de_acceso_simulado_miitomo",
    expires_in: 86400
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de Miitomo corriendo en puerto ${PORT}`);
});
