import express from "express"
import CatEscuelaController from "../controllers/CatEscuela.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatEscuelaController()
    const response = await controller.getEscuelas()
    return res.send(response)
})

router.get("/:name",async (req, res) => {
    const controller = new CatEscuelaController();
    const response = await controller.getEscuela(req.params.name);

    if(!response) return res.status(404).send({ message: "No existe la escuela especificada"})
    return res.send(response)
})

export default router;