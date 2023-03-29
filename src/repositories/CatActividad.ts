import { db } from "../config/database"
import { CatActividad } from "../models"

export const getActividades = async () : Promise<Array<CatActividad>> => {
    const actividadesRepo = db.getRepository(CatActividad)
    return actividadesRepo.find();
}

export const getActividad = async (name : string): Promise<CatActividad | null> => {
    const actividadRepo = db.getRepository(CatActividad);
    const actividad = await actividadRepo.findOne({ where: { nombreActividad : name } })

    if(!actividad) return null
    return actividad
}