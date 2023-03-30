import express from "express"
import CatAlumnoController from "../controllers/TblAlumno.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatAlumnoController()
    const response = await controller.getAlumnos()
    return res.send(response)
})

router.get("/:nombre",async (req, res) => {
    const controller = new CatAlumnoController();
    const response = await controller.getAlumnoByUsername(req.params.nombre);

    if(!response) return res.status(404).send({ message: "No existe el alumno especificado"})
    return res.send(response)
})

export default router;