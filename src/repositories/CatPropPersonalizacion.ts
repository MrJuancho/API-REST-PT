import db from "../config/database"
import { CatPropPersonalizacion } from "../models"

export const getAllPropsPersonalizacion = async () : Promise<Array<CatPropPersonalizacion>> => {
    const propspersonalizacionRepo = db.getRepository(CatPropPersonalizacion)
    return propspersonalizacionRepo.find();
}

export const getPropPersonalizacion = async (id : number) : Promise<CatPropPersonalizacion | null> => {
    const propRepo = db.getRepository(CatPropPersonalizacion)
    const prop = await propRepo.findOne({ where: { idPropPersonalizacion : id }})

    if(!prop) return null
    return prop
}

