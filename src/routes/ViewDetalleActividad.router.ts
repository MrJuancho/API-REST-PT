import express from "express"
import DetalleActividadController from "../controllers/ViewDetalleActividad.controller"
import { DetalleActividadTipoActividadController } from "../controllers/ViewDetalleActividad.controller"

const router = express.Router()

router.get("/", async (_req, res) => {
    const controller = new DetalleActividadController()
    const response = await controller.getActividades()

    return res.send(response)
})

router.get("/:id", async (req, res) => {
    const controller = new DetalleActividadController()
    const response = await controller.getActividad(req.params.id)

    if(!response) return res.status(404).send({ message: "No existe la actividad especificada"})
    return res.send(response)
})

router.get("/:name",async (req, res) => {
    const controller = new DetalleActividadTipoActividadController()
    const response = await controller.getActividadByTipoActividad(req.params.name)

    if(!response) return res.status(404).send({ message: "No existe el tipo de actividad"})
    return res.send(response)
})

export default router