import express from "express"
import CatPropPersonalizacionController from "../controllers/CatPropPersonalizacion.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatPropPersonalizacionController()
    const response = await controller.getAllPropsPersonalizacion()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatPropPersonalizacionController()
    const response = await controller.getPropPersonalizacion(req.params.id)

    if(!response) return res.status(404).send({ message: "No existe el Prop especificado"})
    return res.send(response)
})

export default router