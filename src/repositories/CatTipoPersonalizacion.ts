import { db } from "../config/database"
import { CatTipoPersonalizacion } from "../models"

export const getAllTiposPersonalizacion = async () : Promise<Array<CatTipoPersonalizacion>> => {
    const materiasRepo = db.getRepository(CatTipoPersonalizacion)
    return materiasRepo.find();
}

export const getTipoPersonalizacion = async (name : string): Promise<CatTipoPersonalizacion | null> => {
    const materiaRepo = db.getRepository(CatTipoPersonalizacion);
    const materia = await materiaRepo.findOne({ where: { descTipoPersonalizacion : name } })

    if(!materia) return null
    return materia
}