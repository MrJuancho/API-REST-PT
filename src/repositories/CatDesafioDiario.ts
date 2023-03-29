import { db } from "../config/database"
import { CatDesafioDiario } from "../models"

export const getDesafiosDiarios = async () : Promise<Array<CatDesafioDiario>> => {
    const desafiosDiariosRepo = db.getRepository(CatDesafioDiario)
    return desafiosDiariosRepo.find();
}

export const getDesafioDiario = async (numero : number): Promise<CatDesafioDiario | null> => {
    const desafioDiarioRepo = db.getRepository(CatDesafioDiario);
    const desafioDiario = await desafioDiarioRepo.findOne({ where: { idDesafio : numero } })

    if(!desafioDiario) return null
    return desafioDiario
}