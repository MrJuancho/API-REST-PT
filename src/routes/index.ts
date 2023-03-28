import express from "express"
import PingController from "../controllers/ping"
import CatMateriaRouter from "./CatMateria.router"
import CatTipoPersonalizacion from "./CatTipoPersonalizacion.router"
import CatTipoDesbloqueo  from "./CatTipoDesbloqueo.router"
import CatPropPersonalizacion from "./CatPropPersonalizacion.router"

const router = express.Router()

router.use("/materias", CatMateriaRouter)
router.use("/tipospersonalizacion", CatTipoPersonalizacion)
router.use("/tiposDesbloqueo", CatTipoDesbloqueo)
router.use("/props", CatPropPersonalizacion)

router.get("/ping", async (_req, res) => {
  const controller = new PingController()
  const response = await controller.getMessage()
  return res.send(response)
})

export default router;