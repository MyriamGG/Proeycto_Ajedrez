const {default: mongoose} = require("mongoose");

const alumSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, "Ingresar nombre del alumno"],
    },
    apellido: {
      type: String,
      required: [true, "Ingresar apellido del alumno"],
    },
    Nroescuela: {
        type: Number,
        required: true,
        default: 1
    }
  },
  {
    timestamps: true
  });
  
  // Crear el modelo basado en el esquema
  module.exports = mongoose.model('Alumnos', alumSchema);
  
