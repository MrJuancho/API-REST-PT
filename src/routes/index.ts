import express from "express"

import TblAlumnoController from "./TblAlumno.router"
import CatMateriaRouter from "./CatMateria.router"
import CatTipoPersonalizacion from "./CatTipoPersonalizacion.router"
import CatTipoDesbloqueo  from "./CatTipoDesbloqueo.router"
import CatPropPersonalizacion from "./CatPropPersonalizacion.router"
import CatActividadController from "./CatActividad.router"
import CatEscuelaController from "./CatEscuela.router"
import CatTareaDiariaController from "./CatTareaDiaria.router"
import CatDesafioDiarioController from "./CatDesafioDiario.router"
import CatDatoCuriosoController from "./CatDatoCurioso.router"
import CatContenidoMateriasController from "./CatContenidoMaterias.router"
import CatActividadPPBController from "./CatActividadPPB.router"

import PingController from "../controllers/ping"


const router = express.Router()

router.use("/materias", CatMateriaRouter)
router.use("/tipospersonalizacion", CatTipoPersonalizacion)
router.use("/tiposDesbloqueo", CatTipoDesbloqueo)
router.use("/props", CatPropPersonalizacion)
router.use("/actividades", CatActividadController)
router.use("/escuelas", CatEscuelaController)
router.use("/tareaDiaria", CatTareaDiariaController)
router.use("/desafioDiario", CatDesafioDiarioController)
router.use("/datoCurioso", CatDatoCuriosoController)
router.use("/contenidoMaterias", CatContenidoMateriasController)
router.use("/actividadPPB", CatActividadPPBController)
router.use("/alumno", TblAlumnoController)


router.get("/ping", async (_req, res) => {
  const controller = new PingController()
  const response = await controller.getMessage()
  return res.send(response)
})

export default router;