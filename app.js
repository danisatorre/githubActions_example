const express = require('express');
const app = express();
const port = 3000;
console.log(falloError);

app.get('/', (req, res) => {
    res.send('Hola mon! Aquest es el meu primer servidor Node.js de Dani Satorre');
});

app.listen(port, (error) => {
    if (error) {
        console.error('No s\'ha pogut iniciar el servidor: ', error.message);
        return;
    }
    console.log(`Servidor en funcionament a http://localhost:${port}`);
});