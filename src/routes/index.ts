import express from "express"

import TblIndiceUCBAlumnoController from "./TblUCBController.router"
import TblAlumnoAVController from "./TblAlumnoAv.router"
import TblRegistroDiarioActividadesController from "./TblRegistroDiarioActividades.router"
import TblResultadosActividad from "./TblResultadosActividad.router"
import TblAlumnoController from "./TblAlumno.router"
import CatMateriaRouter from "./CatMateria.router"
import CatTipoDesbloqueo  from "./CatTipoDesbloqueo.router"
import CatActividadController from "./CatActividad.router"
import CatEscuelaController from "./CatEscuela.router"
import CatTareaDiariaController from "./CatTareaDiaria.router"
import CatDesafioDiarioController from "./CatDesafioDiario.router"
import CatDatoCuriosoController from "./CatDatoCurioso.router"
import CatDatoCuriosoContenidoController from "./CatDatoCuriosoContenido.router"
import CatContenidoMateriasController from "./CatContenidoMaterias.router"
import CatActividadPPBController from "./CatActividadPPB.router"
import ViewDetalleActividadController from "./ViewDetalleActividad.router"
import ViewDetalleActividadTipoActividadController from "./ViewDetalleActividad.router"
import CatRutas from "./CatRutas.router"

import PingController from "../controllers/ping"

const router = express.Router()

router.use("/materias", CatMateriaRouter)
router.use("/rutas", CatRutas)
router.use("/tiposDesbloqueo", CatTipoDesbloqueo)
router.use("/actividades", CatActividadController)
router.use("/escuelas", CatEscuelaController)
router.use("/tareaDiaria", CatTareaDiariaController)
router.use("/desafioDiario", CatDesafioDiarioController)
router.use("/datoCurioso", CatDatoCuriosoController)
router.use("/datoCuriosoContenido", CatDatoCuriosoContenidoController)
router.use("/contenidoMaterias", CatContenidoMateriasController)
router.use("/actividadPPB", CatActividadPPBController)
router.use("/alumno", TblAlumnoController)
router.use("/detalleActividad", ViewDetalleActividadController)
router.use("/detalleActividadTipoActividad", ViewDetalleActividadTipoActividadController)
router.use("/resultadoActividad",TblResultadosActividad)
router.use("/registroDiario",TblRegistroDiarioActividadesController)
router.use("/indiceUCB", TblIndiceUCBAlumnoController)
router.use("/alumnoAv", TblAlumnoAVController)


router.get("/ping", async (_req, res) => {
  const controller = new PingController()
  const response = await controller.getMessage()
  return res.send(response)
})

export default router;