import express from "express"
import CatTipoDesbloqueoController from "../controllers/CatTipoDesbloqueo.controller"

const router =  express.Router()

router.get("/", async ( _req , res ) => {
    const controller = new CatTipoDesbloqueoController()
    const response = await controller.getTiposDesbloqueo()
    return res.send(response)
})

router.get("/:name",async (req, res) => {
    const controller = new CatTipoDesbloqueoController();
    const response = await controller.getTipoDesbloqueo(req.params.name);

    if(!response) res.status(404).send({ message: "No existe el Tipo de Desbloqueo especificado"})
    return res.send(response)
})

export default router;