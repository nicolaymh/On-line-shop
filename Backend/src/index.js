import express from 'express';
const app = express();

const port = 3000;

// Routing
app.use('/api/usuarios', );

app.listen(port, () => {
    console.log('Ejecutando desde servidor en el puerto: ', port);
});
