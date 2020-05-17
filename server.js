//setup dependencies
const express = require('express');

//setup express
let PORT = process.env.PORT || 8080;
let app = express();

//need to require models in order to sync
let db = require('./models')

//static directory
app.use(express.static("public"));

//data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//setup handlebars
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//setup routes
require("./routes/burger-api-routes")(app);

// app.use(routes);

// app.listen(PORT, function(){
//     console.log("Server listening on: http://localhost:" + PORT);
// });

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
  });