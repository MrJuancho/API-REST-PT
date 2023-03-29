import { db } from "../config/database"
import { CatActividadPpb } from "../models"

export const getActividadesPPB = async () : Promise<Array<CatActividadPpb>> => {
    const actividadesRepo = db.getRepository(CatActividadPpb)
    return actividadesRepo.find();
}

export const getActividadPPB = async (id : number): Promise<CatActividadPpb | null> => {
    const actividadPPBRepo = db.getRepository(CatActividadPpb);
    const actividadPPB = await actividadPPBRepo.findOne({ where: { idActividadPpb : id } })

    if(!actividadPPB) return null
    return actividadPPB
}