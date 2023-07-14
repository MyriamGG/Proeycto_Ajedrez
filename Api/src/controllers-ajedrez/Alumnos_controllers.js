const alumSchema = require("../models/Alumnos")
const express = require("express");
const app = express();
app.use(express.json());

//Build Restful CRUD API with Node.js, Express and MongoDB in 45 minutes for Beginners from Scratch

const Crear_Alumnos =  async (req, res) => {

    try{
        const Alumno = await alumSchema.create(req.body)
        res.json(Alumno);
    }
    catch(err){
         res.json({message: err.message});
    }
};

const Leer_Alumnos_total = async (req, res) => {
    try {
        const Alumnos = await alumSchema.find(req.body)
        res.json(Alumnos);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
}

const Leer_Alumnos_individual = async (req, res) => {
    try {
        const {id} = req.params;
        const Alumno = await alumSchema.findById(id);
        if (!Alumno) res.status(404).send(`No se pudo encontrar el alumno con id ${id}`);
         else res.status(200).json(Alumno);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const Actualizar_Alumnos = async (req, res) => {
    try {
        const {id} = req.params;
        const Alumno = await alumSchema.findByIdAndUpdate(id, req.body);
        if (!Alumno) res.status(404).json({message: `No se pudo encontrar un alumno con Id = ${id}`});
        const alumnoActual = await alumSchema.findById(id); 
        res.status(200).json(alumnoActual);
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const Borrar_Alumnos = async (req, res) => {
    try{
        const {id} = req.params;
        const Alumno = await alumSchema.findByIdAndDelete(id);
        if (!Alumno) {
            res.status(404).json({message: `No se pudo encontrar el alumno con id ${id}`});
        }
        else res.status(200).json({message: "Alumno borrado satisfactoriamente"});
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    Crear_Alumnos,
    Leer_Alumnos_total,
    Leer_Alumnos_individual,
    Actualizar_Alumnos,
    Borrar_Alumnos
}