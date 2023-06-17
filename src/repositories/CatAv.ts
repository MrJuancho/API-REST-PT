import { db } from "../config/database"
import { CatAv } from "../models"
import { Equal } from "typeorm/find-options/operator/Equal";

export const getAll = async () : Promise<Array<CatAv>> => {
    const AVRepo = db.getRepository(CatAv)
    return AVRepo.find();
}

export const getTipoAV = async (id: number): Promise<CatAv[]> => {
    const AVRepo = db.getRepository(CatAv);
    return await AVRepo.find({
      where: { idTipoDesbloqueo: Equal(id) },
    });
}