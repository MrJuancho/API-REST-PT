import express, { response } from "express"
import CatTipoPersonalizacion from "../controllers/CatTipoPersonalizacion.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatTipoPersonalizacion()
    const response = await controller.getAllTiposPersonalizacion()
    return res.send(response)
})

router.get("/:name",async (req, res) => {
    const controller = new CatTipoPersonalizacion();
    const response = await controller.getTipoPersonalizacion(req.params.name);

    if(!response) return res.status(404).send({ message: "No existe el tipo de personalizacion especificado"})
    return res.send(response)
})

export default router;