import express from "express"
import TblIndiceUCBAlumnoController from "../controllers/TblIndiceUCBAlumno.controller"

const router = express.Router()

router.get("/:idAlumno", async (req, res) => {
    const controller = new TblIndiceUCBAlumnoController()
    const response = await controller.getActividadesByMostUCB(req.params.idAlumno)

    if(!response) return res.status(404).send({ message : "No se encontraron actividades UCB del Alumno"})
    return res.send(response)
})

router.post("/", async (req, res) => {
    const controller = new TblIndiceUCBAlumnoController()
    const response = await controller.postIndiceUCBAlumno(req.body)

    return res.send(response)
})

router.put("/:idAlumno", async (req, res) => {
    const controller = new TblIndiceUCBAlumnoController()
    const response = await controller.updateIndiceUCPAlumno(req.body)

    return res.send(response)
})

export default router