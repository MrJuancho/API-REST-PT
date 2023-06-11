import express from "express"
import TblResultadosActividadController from "../controllers/TblResultadosActividad.controller"

const router = express.Router()

router.get("/:date", async (req, res) => {
    const controller = new TblResultadosActividadController()
    const response = await controller.getResultadosActividad(req.params.date)

    if (!response) return res.status(404).send({ message : "No se encuentran esos resultados" })
    return res.send(response)
})

router.post("/",async (req, res) => {
    const controller = new TblResultadosActividadController()
    const response = await controller.postResultados(req.body)

    return res.send(response)
})

export default router