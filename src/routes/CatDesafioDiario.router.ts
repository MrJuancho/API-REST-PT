import express from "express"
import CatDesafioDiarioController from "../controllers/CatDesafioDiario.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatDesafioDiarioController()
    const response = await controller.getDesafiosDiarios()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatDesafioDiarioController();
    const numero = parseInt(req.params.id)
    const response = await controller.getDesafioDiario(numero);

    if(!response) return res.status(404).send({ message: "No existe el desafio diario especificado"})
    return res.send(response)
})

export default router;