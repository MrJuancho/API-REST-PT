import express from "express"
import CatPropPersonalizacionController from "../controllers/CatPropPersonalizacion.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatPropPersonalizacionController()
    const response = await controller.getAllPropsPersonalizacion()
    return res.send(response)
})

router.get("/:name",async (req, res) => {
    const controller = new CatPropPersonalizacionController();
    const response = await controller.getPropPersonalizacion(req.params.name);

    if(!response) res.status(404).send({ message: "No existe el Prop especificado"})
    return res.send(response)
})

export default router;