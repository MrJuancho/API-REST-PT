import db from "../config/database"
import { TblAlumno, TblIndiceUcbAlumno, CatActividad } from "../models"

export interface payloadActividadUCBAlumno {
    idAlumno : number,
    idActividad: number,
    indiceUCB: number
}

export const getActividadByMostUBC = async (idAlumno : number) : Promise<TblIndiceUcbAlumno | null> => {
    const ucbRepo = db.getRepository(TblIndiceUcbAlumno)

    const actividad = await ucbRepo.createQueryBuilder()
                    .select("MAX(indiceUCB)", "max")
                    .where("idAlumno = :idAlumno", { idAlumno : idAlumno })
                    .getRawOne()

    if(!actividad) return null
    return actividad
}

export const getActividadesOrderByMostUCB = async (idAlumno : number) : Promise<Array<TblIndiceUcbAlumno>> => {
    const ucbRepo = db.getRepository(TblIndiceUcbAlumno)

    const actividades = await ucbRepo.createQueryBuilder()
                    .where("idAlumno = :idAlumno", { idAlumno : idAlumno })
                    .orderBy("indiceUCB","ASC")
                    .getRawMany()

    return actividades
}

export const pushUCBIndex = async (payload : payloadActividadUCBAlumno) : Promise<TblIndiceUcbAlumno> => {
    const ucbRepo = db.getRepository(TblIndiceUcbAlumno)

    const actividad = await db.getRepository(CatActividad).findOne({ where : { idActividad : payload.idActividad } })
    const alumno = await db.getRepository(TblAlumno).findOne({where : {idAlumno : payload.idAlumno}})

    const ucbAlumno = new TblIndiceUcbAlumno()
    ucbAlumno.idAlumno = alumno!
    ucbAlumno.idActividad = actividad!
    ucbAlumno.indiceUcb = payload.indiceUCB

    return ucbRepo.save(ucbAlumno)
}

export const putUCBIndex = async (payload : payloadActividadUCBAlumno) : Promise<void> => {
    const ucbRepo = db.getRepository(TblIndiceUcbAlumno)

    ucbRepo.update({
        idAlumno : { idAlumno : payload.idAlumno },
        idActividad : {idActividad : payload.idActividad}
        },
        {
            indiceUcb : payload.indiceUCB
    })
}


