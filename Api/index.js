const app = require("./src/app");

const {PORT}=process.env;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
