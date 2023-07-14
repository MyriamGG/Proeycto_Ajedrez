const {default: mongoose} = require("mongoose");

const escSchema = mongoose.Schema({
    IDescuela: {
        type: Number,
        required: true,
        unique: true,
    },
	nombreEsc: {
        type: String,
        required: true,
        unique: true,
    },
	grado: {
        type: Number,
        required: true,
        unique: false,
    },
	division: {
        type: String,
        required: true,
        unique: false,
    },
	IDalumno: {
        type: Number,
        required: true,
        unique: true,
    },
	IDlocalidad: {
        type: Number,
        required: true,
        unique: true,
    }
})

const Escuela = mongoose.model("Escuela", escSchema);