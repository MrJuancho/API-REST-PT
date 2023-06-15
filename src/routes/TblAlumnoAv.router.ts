import express from "express"
import TblAlumnoAVController from "../controllers/TblAlumnoAv.controller"

const router = express.Router()

router.get("/:idAlumno", async (req,res) => {
    const controller = new TblAlumnoAVController()
    const response = await controller.getAvByAlumno(req.params.idAlumno)

    if(!response) return res.status(404).send({ message : "No hay Avs para ese alumno" })
    return res.send(response)
})

router.post("/", async (req, res) => {
    const controller = new TblAlumnoAVController()
    const response = await controller.postAVUnlock(req.body)

    return res.send(response)
})

export default router