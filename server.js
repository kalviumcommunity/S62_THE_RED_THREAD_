const express = require('express');
const app = express();
const database = require('./db/database.js')

const port =3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    database();
    console.log(`Server running on http://localhost:${port}`);
});
