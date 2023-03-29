import { db } from "../config/database"
import { CatEscuela } from "../models"

export const getEscuelas = async () : Promise<Array<CatEscuela>> => {
    const escuelasRepo = db.getRepository(CatEscuela)
    return escuelasRepo.find();
}

export const getEscuela = async (name : string): Promise<CatEscuela | null> => {
    const escuelaRepo = db.getRepository(CatEscuela);
    const escuela = await escuelaRepo.findOne({ where: { nombre : name } })

    if(!escuela) return null
    return escuela
}