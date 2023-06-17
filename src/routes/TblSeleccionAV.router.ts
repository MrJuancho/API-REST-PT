import express from "express"
import TblSeleccionAVController from "../controllers/TblSeleccionAv.controller"

const router = express.Router()

router.get("/:idAlumno", async (req, res) => {
    const controller = new TblSeleccionAVController()
    const response = await controller.getAlumnoSelectedAV(req.params.idAlumno)

    if(!response)return res.status(404).send({ message : "No existen registros de ese alumno" })
    return res.send(response)
})

router.put("/:idAlumno", async (req, res) => {
    const controller = new TblSeleccionAVController()
    const response = await controller.updateSelectedAV(req.body)

    return res.send(response)
})

export default router