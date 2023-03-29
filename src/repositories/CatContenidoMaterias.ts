import { db } from "../config/database"
import { CatContenidoMaterias } from "../models"

export const getContenidoMaterias = async () : Promise<Array<CatContenidoMaterias>> => {
    const actividadesRepo = db.getRepository(CatContenidoMaterias)
    return actividadesRepo.find();
}

export const getContenidoMateria = async (id : number): Promise<CatContenidoMaterias | null> => {
    const datoCuriosoRepo = db.getRepository(CatContenidoMaterias);
    const datoCurioso = await datoCuriosoRepo.findOne({ where: { idContenidoMateria : id } })

    if(!datoCurioso) return null
    return datoCurioso
}