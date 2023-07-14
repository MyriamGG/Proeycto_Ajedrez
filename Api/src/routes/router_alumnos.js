const {Router} = requier('express');
const router = Router();

const {
    Crear_Alumnos,
    Leer_Alumnos_total,
    Leer_Alumnos_individual,
    Actualizar_Alumnos,
    Borrar_Alumnos
} = require('../controllers-ajedrez/Alumnos_controllers');

// Create
router.post('/alumno', Crear_Alumnos);

// Read All
router.get('/alumno', Leer_Alumnos_total);

// read by Id
router.get('/alumno/:id', Leer_Alumnos_individual);

// Update
router.put("/alumno/:id", Actualizar_Alumnos);

// Delete
router.delete("/alumno/:id", Borrar_Alumnos);