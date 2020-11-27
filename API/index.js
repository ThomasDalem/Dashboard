const port = process.env.PORT || 4200;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const dotenv = require("dotenv");
const models = require("./src/models");
const initModels = require("./src/models/init-models");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.use("/user", require("./src/routes/UserRoutes"));
app.use("/weather-widget", require("./src/routes/WeatherWidgetRoutes"));
app.use("/widgets", require("./src/routes/WidgetsRoutes"));
app.use('/money-converter-widget', require('./src/routes/MoneyConverterWidgetRoutes'));
app.use('/github-infos-user-widget', require('./src/routes/GithubInfosUserWidgetRoutes'));
app.use('/github-search-user-widget', require('./src/routes/GithubSerchUserWidgetRoutes'));
app.use('/github-user-repos-widget', require('./src/routes/GithubUserReposWidgetRoutes'));

app.get("/", (req, res) => {
  res.send("bonjour");
});

initModels(models.sequelize);
models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Dashboard API running on port ${port}.`);
  });
});
