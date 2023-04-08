import express from "express"
import ViewDetallePropsController from "../controllers/ViewDetalleProps.controller"

const router = express.Router()

router.get("/", async (_req, res) => {
    const controller = new ViewDetallePropsController()
    const response = await controller.getAllDetalleProps()
    return res.send(response)
})

router.get("/:id", async (req, res) => {
    const controller = new ViewDetallePropsController()
    const response = await controller.getDetalleProps(req.params.id)

    if(!response) return res.status(404).send({ message: "No existe el detalle prop especificado" })
    return res.send(response)
})

export default router