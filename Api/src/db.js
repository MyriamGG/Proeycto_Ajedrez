require("dotenv").config();
const { PORTMongo } = process.env;
const mongoose = require('mongoose');

// Conectar a la base de datos de MongoDB
mongoose.connect(`mongodb://localhost:${PORTMongo}/Ajedrez`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });


