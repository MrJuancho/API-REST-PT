import db from "../config/database"
import { TblSeleccionAv, TblAlumno, TblAlumnoAv } from "../models"

export interface editAVPayload {
    idAlumno: number,
    idAV: number
}

export const getAlumnoSelectedAV = async (idAlumno : number) : Promise<TblSeleccionAv | null> => {
    const selecRepo = db.getRepository(TblSeleccionAv)

    const seleccion = await selecRepo.createQueryBuilder()
                        .where("idAlumno = :idAlumno", { idAlumno : idAlumno })
                        .getRawOne()

    if(!seleccion) return null
    return seleccion
}

export const updateSeleccionAV = async ( payload : editAVPayload ) : Promise<void> => {
    const selecRepo = db.getRepository(TblSeleccionAv)

    const alumnoAv = await db.getRepository(TblAlumnoAv).createQueryBuilder()
                        .where("idAlumno = :idAlumno", { idAlumno : payload.idAlumno })
                        .andWhere("idAV = :idAV", { idAV : payload.idAV })
                        .getOne()


    selecRepo.createQueryBuilder().update().set({ idAlumnoAv : {
        idAvAlumno : alumnoAv?.idAvAlumno
    } }).where("idAlumno = :idAlumno", { idAlumno : payload.idAlumno }).execute()
}