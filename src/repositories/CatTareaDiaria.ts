import { db } from "../config/database"
import { CatTareaDiaria } from "../models"

export const getTareasDiarias = async () : Promise<Array<CatTareaDiaria>> => {
    const tareasdiariasRepo = db.getRepository(CatTareaDiaria)
    return tareasdiariasRepo.find();
}

export const getTareaDiaria = async (numero : number): Promise<CatTareaDiaria | null> => {
    const tareadiariaRepo = db.getRepository(CatTareaDiaria);
    const tareadiaria = await tareadiariaRepo.findOne({ where: { idTareaDiaria : numero } })

    if(!tareadiaria) return null
    return tareadiaria
}