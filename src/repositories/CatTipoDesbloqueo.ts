import { db } from "../config/database"
import { CatTipoDesbloqueo } from "../models"

export const getTipoDesbloqueos = async () : Promise<Array<CatTipoDesbloqueo>> => {
    const desbloqueosRepo = db.getRepository(CatTipoDesbloqueo)
    return desbloqueosRepo.find();
}

export const getTipoDesbloqueo = async (name : string): Promise<CatTipoDesbloqueo | null> => {
    const desbloqueoRepo = db.getRepository(CatTipoDesbloqueo);
    const desbloqueo = await desbloqueoRepo.findOne({ where: { descTipoDebloqueo : name } })

    if(!desbloqueo) return null
    return desbloqueo
}