const express = require ("express");
const routes = require ("./routes/index.js");
const Sequelize = require ("sequelize");
const sequelize = require ("./config/connection");
const app = express();
const port = process.env.PORT || 3006;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);
sequelize.sync ({}).then(() => {
    console.log ("Sequelize Running");
    app.listen(port, () => console.log("express connected"))
});
