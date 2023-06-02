import express from "express"
import TblRegistroDiarioActividadesController from "../controllers/TblRegistroDiarioActividades.controller"

const router = express.Router()

router.get("/:idUser", async (req, res) => {
    const controller = new TblRegistroDiarioActividadesController()
    const response = await controller.getRegistroAlumno(req.params.idUser)

    if(!response) return res.status(404).send({ message : "No se encuentra el Registro Diario del alumno" })
    return res.send(response)
})

router.post("/", async (req, res) => {
    const controller = new TblRegistroDiarioActividadesController()
    const response = await controller.postRegistroDiario(req.body)

    return res.send(response)
})

router.put("/:idAlumno",async (req,res) => {
    const controller = new TblRegistroDiarioActividadesController()
    const response = await controller.updateTareasCompletadas(req.body)

    return res.send(response)
})

export default router;