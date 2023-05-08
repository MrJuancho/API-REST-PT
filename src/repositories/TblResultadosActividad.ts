
import db from "../config/database"
import { CatActividad, TblAlumno, TblResultadosActividad } from "../models"

export interface uploadActividadPayload {
    idActividad: number,
    idAlumno: number,
    tiempoResolucion: Date,
    intentos: number,
    asistencias: number
}

export const getResultadoActividad = async (id : number) : Promise<TblResultadosActividad | null> => {
    const resRepo = db.getRepository(TblResultadosActividad);
    const resultadoConsulta = resRepo.findOne({ where : {idActividadPpbAlumno : id}})

    if(!resultadoConsulta) return null
    return resultadoConsulta
}

export const createResultado = async (payload : uploadActividadPayload) : Promise<TblResultadosActividad> => {
    const resRepo = db.getRepository(TblResultadosActividad)

    const Actividad = await db.getRepository(CatActividad).findOne({where: { idActividad : payload.idActividad }})
    const Alumno = await db.getRepository(TblAlumno).findOne({ where : { idAlumno : payload.idAlumno} })


    const Resultado = new TblResultadosActividad()
    Resultado.idActividad = Actividad!
    Resultado.idAlumno = Alumno!
    Resultado.asistencias = payload.asistencias
    Resultado.intentos = payload.intentos
    Resultado.tiempoResolucion = payload.tiempoResolucion

    return resRepo.save(Resultado)
}