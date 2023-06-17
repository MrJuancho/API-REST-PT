import express from "express"
import CatAVController from "../controllers/CatAv.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatAVController()
    const response = await controller.getAVs()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatAVController();
    const numero = parseInt(req.params.id)
    const response = await controller.getTipodAV(numero);

    if(!response) return res.status(404).send({ message: "No existe el tipo de Asistente Virtual especificada"})
    return res.send(response)
})

export default router;