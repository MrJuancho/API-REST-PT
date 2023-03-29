import express from "express"
import CatActividadController from "../controllers/CatActividad.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatActividadController()
    const response = await controller.getActividades()
    return res.send(response)
})

router.get("/:name",async (req, res) => {
    const controller = new CatActividadController();
    const response = await controller.getActividad(req.params.name);

    if(!response) return res.status(404).send({ message: "No existe la actividad especificada"})
    return res.send(response)
})

export default router;