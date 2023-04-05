import express from "express"
import CatDatoCuriosoContenidoController from "../controllers/CatDatoCuriosoContenido.controller"

const router =  express.Router()

router.get("/:idContenidoM", async (req, res) => {
    const controller =  new CatDatoCuriosoContenidoController()
    const numero = parseInt(req.params.idContenidoM)
    const response = await controller.getDatosCuriososByContenido(numero)

    if(!response) return res.status(404).send({ message: "No se encuentra algun dato curioso perteneciente a ese contenido"})
    return res.send(response)
})

export default router