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
var hospitalRouters = require("./routes/hospital");
var medicoRouters = require("./routes/medico");
var loginRouters = require("./routes/login");
var busquedaRouters = require("./routes/busqueda");
var uploadRouters = require("./routes/upload");
var imagenesRoutes = require('./routes/imagenes');

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

// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));


//Rutas
app.use("/usuario", usuarioRouters);
app.use("/hospital", hospitalRouters);
app.use("/medico", medicoRouters);
app.use("/login", loginRouters);
app.use("/busqueda", busquedaRouters);
app.use("/upload", uploadRouters);
app.use('/img', imagenesRoutes);
app.use("/", appRouters);


//Escuchar peticiones
app.listen(27017, () => {
    console.log("Express online :D");
});