import express from "express"
import CatAVController from "../controllers/CatAv.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatAVController()
    const response = await controller.getAVs()
    return res.send(response)
})

router.get("/tipo/:idTipoAV",async (req, res) => {
    const controller = new CatAVController();
    const numero = parseInt(req.params.idTipoAV)
    const response = await controller.getTipodAV(numero);

    if(!response) return res.status(404).send({ message: "No existe el tipo de Asistente Virtual especificada"})
    return res.send(response)
})

router.get("/av/:idAV",async (req, res) => {
    const controller = new CatAVController();
    const numero = parseInt(req.params.idAV)
    const response = await controller.getAV(numero);

    if(!response) return res.status(404).send({ message: "No existe el Asistente Virtual especificado"})
    return res.send(response)
})

export default router;