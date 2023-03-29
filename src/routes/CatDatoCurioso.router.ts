import express from "express"
import CatDatoCuriosoController from "../controllers/CatDatoCurioso.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatDatoCuriosoController()
    const response = await controller.getDatosCuriosos()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatDatoCuriosoController();
    const numero = parseInt(req.params.id)
    const response = await controller.getDatoCurioso(numero);

    if(!response) return res.status(404).send({ message: "No existe el dato curioso especificado"})
    return res.send(response)
})

export default router;