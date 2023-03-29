import express from "express"
import CatTareaDiariaController from "../controllers/CatTareaDiaria.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatTareaDiariaController()
    const response = await controller.getTareasDiarias()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatTareaDiariaController();
    const numero = parseInt(req.params.id)
    const response = await controller.getTareaDiaria(numero);

    if(!response) return res.status(404).send({ message: "No existe la tarea diaria especificada"})
    return res.send(response)
})

export default router;