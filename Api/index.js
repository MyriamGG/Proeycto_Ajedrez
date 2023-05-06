const app = require("./src/app");
require("dotenv").config(); //VA EN db.js
//const { conn } = require("./src/db.js");
// const {precargaLocation} = require("./src/services/precargaLocation");
// const {precargaDiseases} = require("./src/services/precargaDiseases");
// const {precargaVaccines} = require("./src/services/precargaVaccines")

const {PORT}=process.env;

// conn.sync( {force: false }).then( () => {
//     // precargaLocation();
//     // precargaDiseases();
//     // precargaVaccines();

//     app.listen(3000, () => {
//         console.log(`Listening in port ${PORT}`)
//     })
// })

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
