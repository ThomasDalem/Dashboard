const express = require('express');
const app = express();
const port = process.env.PORT | 4200;

app.get('/', (req, res) => {
    res.send('bonjour');
});

app.listen(port, () => {
    console.log(`Dashboard API running on port ${port}.`);
});
