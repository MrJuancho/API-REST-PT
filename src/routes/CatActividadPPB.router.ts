import express from "express"
import CatActividadPPBController from "../controllers/CatActividadPPB.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatActividadPPBController()
    const response = await controller.getActividadesPPB()
    return res.send(response)
})

router.get("/:id",async (req, res) => {
    const controller = new CatActividadPPBController();
    const numero = parseInt(req.params.id)
    const response = await controller.getActividadPPB(numero);

    if(!response) return res.status(404).send({ message: "No existe la actividad de PPB especificada"})
    return res.send(response)
})

export default router;