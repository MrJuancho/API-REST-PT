import { db } from "../config/database"
import { CatActividad } from "../models"

export const getActividades = async () : Promise<Array<CatActividad>> => {
    const actividadesRepo = db.getRepository(CatActividad)
    return actividadesRepo.find();
}

export const getActividad = async (nombre : string): Promise<CatActividad | null> => {
    const actividadPPBRepo = db.getRepository(CatActividad);
    const actividadPPB = await actividadPPBRepo.findOne({ where: { nombreActividad : nombre } })

    if(!actividadPPB) return null
    return actividadPPB
}