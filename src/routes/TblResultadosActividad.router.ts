import express from "express"
import TblResultadosActividadController from "../controllers/TblResultadosActividad.controller"

const router = express.Router()

router.get("/:date", async (req, res) => {
    const controller = new TblResultadosActividadController()
    const response = await controller.getResultadosActividad(req.params.date)

    if (!response) return res.status(404).send({ message : "No se encuentran esos resultados" })
    return res.send(response)
})

router.get("/", async (_req, res) => {
    const controller = new TblResultadosActividadController()
    const response = await controller.getResultados()

    if (!response) return res.status(404).send({ message : "No existen resultados"})
    return res.send(response)
})

router.post("/",async (req, res) => {
    const controller = new TblResultadosActividadController()
    const response = await controller.postResultados(req.body)

    return res.send(response)
})

router.put("/:idResultado", async (req, res) => {
    const controller = new TblResultadosActividadController()
    const response = await controller.updateRecompensaActividad(req.body)

    return res.send(response)
})

export default router