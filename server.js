const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
