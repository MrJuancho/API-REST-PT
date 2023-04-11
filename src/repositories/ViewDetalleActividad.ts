import db from "../config/database"
import { ViewDetalleActividad } from "../models"

export const getDetalleActividad = async () : Promise<Array<ViewDetalleActividad>> => {
    const actividadRepo = db.getRepository(ViewDetalleActividad)
    return actividadRepo.find()
}

export const getDetalleActividadById = async (id : number) : Promise<ViewDetalleActividad | null> => {
    const actividadRepo = db.getRepository(ViewDetalleActividad)
    const actividad = actividadRepo.findOne({ where : { idActividad: id }})

    if(!actividad) return null
    return actividad
}

export const getDetalleActividadbyTipoActividad = async (tipoActividad : string) : Promise<ViewDetalleActividad | null> => {
    const actividadRepo = db.getRepository(ViewDetalleActividad)
    const actividad = actividadRepo.findOne({ where : { DescripcionTipoActividad: tipoActividad }})

    if(!actividad) return null
    return actividad
}