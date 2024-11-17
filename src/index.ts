import express from 'express';

const app = express();

app.listen(3001, () => {
    console.log("El servidor está en el puerto 3001");
});