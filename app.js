//Requires
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//Inicializar variables
var app = express();
//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //Importar rutas
var appRouters = require("./routes/app");
var usuarioRouters = require("./routes/usuario");
var loginRouters = require("./routes/login");
//Conexion a la base de datos
mongoose.connect("mongodb://localhost:27017/adminPro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on(
    "error",
    console.error.bind(console, "Connection error:")
);
mongoose.connection.once("open", function() {
    console.log("Base de datos conectada correctamente");
});
//Rutas
app.use("/usuario", usuarioRouters);
app.use("/login", loginRouters);
app.use("/", appRouters);


//Escuchar peticiones
app.listen(27017, () => {
    console.log("Express online :D");
});