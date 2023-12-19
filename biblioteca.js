const express = require("express");
const app     = express();

const routerLibros = require("./routes/libros");
const errorHandler = require("./middleware/error.Handler");

app.use(express.json());
app.use("/libros", routerLibros);
app.use(errorHandler);



const port = 3000;

app.listen(port, () => {
    console.log(`iniciando servidor en el puerto "${port}"`);
});

