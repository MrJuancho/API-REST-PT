import express from "express"
import TblPpbAlumnoController from  "../controllers/TblPpbAlumno.controller"

const router = express.Router()

router.put("/:nombre", async (req,res) => {
    const controller = new TblPpbAlumnoController()
    const response = await controller.updatePPBAlumno(req.body)
    console.log("Aqui Route")
    return res.send(response)
})

export default router