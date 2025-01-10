const express = require('express');
const app = express();

// Use environment variable for port, with a default fallback
const port =  3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server runing on http://localhost:${port}`);
});
