const {default: mongoose} = require("mongoose");

const VideoSchema = mongoose.Schema({
    IDvideo: {
        type: Number,
        required: true,
        unique: true,
    },
	nombreVideo: {
        type: String,
        required: true,
        unique: false,
    },
	fecha: {
        type: Date,
        required: true,
        unique: false,
    },
	visitas: {
        type: Number,
        required: true,
        unique: false,
    }
})

const Video = mongoose.model("Video", VideoSchema);