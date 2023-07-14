const { default: mongoose } = require("mongoose");

const CompeSchema = mongoose.Schema({
    IDcomp: {
        type: Number,
        requered: true,
        unique: true,
    },
    nombreComp: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: false,
        unique: false,
    },
	posición: {
        type: String,
        required: true,
        unique: false,
    }
})

//crear el modelo basado en el esquema
const Competencia = mongoose.model("Competencia", CompeSchema);