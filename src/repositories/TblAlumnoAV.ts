import db from  "../config/database"
import { CatAv, TblAlumno, TblAlumnoAv } from "../models"

export interface newAVPayload {
    idAlumno: number,
    idAv: number,
    FechaDesbloqueo: Date
}

export const getAVByAlumno = async (idAlumno : number) : Promise<Array<TblAlumnoAv>> => {
    const avRepo = db.getRepository(TblAlumnoAv)

    const AVs = await avRepo.createQueryBuilder()
                    .where("idAlumno = :idAlumno", { idAlumno : idAlumno })
                    .getRawMany()

    return AVs
}

export const unlockAV = async (payload : newAVPayload) : Promise<TblAlumnoAv> => {
    const avRepo = db.getRepository(TblAlumnoAv)

    const alumno = await db.getRepository(TblAlumno).findOne({ where : { idAlumno : payload.idAlumno } })
    const av = await db.getRepository(CatAv).findOne({ where : { idAv : payload.idAv } })

    const unlock = new TblAlumnoAv()
    unlock.idAlumno = alumno!
    unlock.idAv = av!
    unlock.fechaDesbloqueo = payload.FechaDesbloqueo

    return avRepo.save(unlock)
}