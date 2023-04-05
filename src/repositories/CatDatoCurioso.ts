import { db } from "../config/database"
import { CatDatoCurioso } from "../models"

export const getDatosCuriosos = async () : Promise<Array<CatDatoCurioso>> => {
    const actividadesRepo = db.getRepository(CatDatoCurioso)
    return actividadesRepo.find();
}

export const getDatoCurioso = async (id : number): Promise<CatDatoCurioso | null> => {
    const datoCuriosoRepo = db.getRepository(CatDatoCurioso);
    const datoCurioso = await datoCuriosoRepo.findOne({ where: { idDatoCurioso : id } })

    if(!datoCurioso) return null
    return datoCurioso
}

export const getDatosCuriososByContenido = async (idContenidoM : number) : Promise<Array<CatDatoCurioso>> => {
    const datoCuriosoRepo = db.getRepository(CatDatoCurioso)
    const datosCuriosos = await datoCuriosoRepo.createQueryBuilder()
                        .where("idContenidoMateria = :idContenido", { idContenido : idContenidoM })
                        .getMany()

    return datosCuriosos
}