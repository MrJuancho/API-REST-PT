import db from "../config/database"
import { ViewDetalleProps } from "../models"

export const getAllDetalleProps = async () : Promise<Array<ViewDetalleProps>> => {
    const propspersonalizacionRepo = db.getRepository(ViewDetalleProps)
    return propspersonalizacionRepo.find();
}

export const getDetalleProps = async (id : number) : Promise<ViewDetalleProps | null> => {
    const propRepo = db.getRepository(ViewDetalleProps)
    const prop = await propRepo.findOne({ where: { idPropPersonalizacion : id }})

    if(!prop) return null
    return prop
}