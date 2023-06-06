import express from "express"
import CatRutasController from "../controllers/CatRutas.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatRutasController()
    const response = await controller.getRutas()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatRutasController();
    const numero = parseInt(req.params.id)
    const response = await controller.getRuta(numero);

    if(!response) return res.status(404).send({ message: "No existe la ruta especificada"})
    return res.send(response)
})

export default router;