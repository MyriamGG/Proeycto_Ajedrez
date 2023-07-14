const {default: mongoose} = require("mongoose");

const LocalSchema = mongoose.Schema({
    IDlocalidad: {
        type: Number,
        required: true,
        unique: true,
    },
	nombreLocal: {
        type: String,
        required: true,
        unique: false,
    },
	IDescuela: {
        type: Number,
        required: true,
        unique: true,
    },
})

const Localidad = mongoose.model("Localidad", LocalSchema);