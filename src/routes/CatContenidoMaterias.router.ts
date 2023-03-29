import express from "express"
import CatContenidoMateriasController from "../controllers/CatContenidoMaterias.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatContenidoMateriasController()
    const response = await controller.getContenidoMaterias()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatContenidoMateriasController();
    const numero = parseInt(req.params.id)
    const response = await controller.getContenidoMateria(numero);

    if(!response) return res.status(404).send({ message: "No existe el contenido de la materia especificada"})
    return res.send(response)
})

export default router;