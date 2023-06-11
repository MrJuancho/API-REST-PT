
import { MoreThanOrEqual } from "typeorm";
import db from "../config/database"
import { CatActividad, TblAlumno, TblResultadosActividad } from "../models"

export interface uploadActividadPayload {
    idActividad: number,
    idAlumno: number,
    tiempoResolucion: Date,
    intentos: number,
    asistencias: number,
    fecha: Date
}

export const getResultadoActividad = async (dateTime : string) : Promise<Array<TblResultadosActividad>> => {
    const resRepo = db.getRepository(TblResultadosActividad)

    const fecha = new Date(dateTime)

    const resultados = resRepo.find({ where : {
        fechaRealizacion : MoreThanOrEqual(fecha)
    }})

    return resultados
}

export const createResultado = async (payload : uploadActividadPayload) : Promise<TblResultadosActividad> => {
    const resRepo = db.getRepository(TblResultadosActividad)

    const Actividad = await db.getRepository(CatActividad).findOne({where: { idActividad : payload.idActividad }})
    const Alumno = await db.getRepository(TblAlumno).findOne({ where : { idAlumno : payload.idAlumno} })


    const Resultado = new TblResultadosActividad()
    Resultado.idActividad = Actividad!
    Resultado.idAlumno = Alumno!
    Resultado.asistencia = payload.asistencias
    Resultado.intentos = payload.intentos
    Resultado.tiempoResolucion = payload.tiempoResolucion
    Resultado.fechaRealizacion = payload.fecha

    return resRepo.save(Resultado)
}