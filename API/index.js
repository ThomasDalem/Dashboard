const express = require('express');
const app = express();
const port = process.env.PORT | 4200;
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./src/routes/UserRoutes')(app);

app.get('/', (req, res) => {
    res.send('bonjour');
});

app.listen(port, () => {
    console.log(`Dashboard API running on port ${port}.`);
});
