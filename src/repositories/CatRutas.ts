import { db } from "../config/database"
import { CatRutas } from "../models"

export const getRutas = async () : Promise<Array<CatRutas>> => {
    const rutasRepo = db.getRepository(CatRutas)
    return rutasRepo.find();
}

export const getOneRuta = async (id : number): Promise<CatRutas | null> => {
    const rutasRepo = db.getRepository(CatRutas)
    const ruta = await rutasRepo.findOne({
        where: { idActividades: { idActividad: id } },
      });
      

    if(!ruta) return null
    return ruta
}