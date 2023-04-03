import {  UpdateResult } from "typeorm"
import db from "../config/database"
import { TblAlumno, TblPpbAlumno } from "../models"

export interface UpdatePpbPayload {
    username: string,
    atencion: number,
    memoria: number,
    percepcion: number
}

export const putAlumnoPpb = async (payload : UpdatePpbPayload) : Promise<void> => {
    const alumnoRepo = db.getRepository(TblAlumno)

    const alumnoActual = await alumnoRepo.findOne({ where : { nombreUsuario : payload.username}})

    const ppbRepo = db.getRepository(TblPpbAlumno)

    const alumnoID = new TblAlumno()

    alumnoID.idAlumno = alumnoActual!.idAlumno

    const ppbIndex = await ppbRepo.createQueryBuilder()
                                .where("idAlumno = :idAlumno", { idAlumno : alumnoID.idAlumno })
                                .getOne()

    const atencionAct = ppbIndex!.indiceAtencion + payload.atencion
    const percepcionAct = ppbIndex!.indicePercepcion + payload.percepcion
    const memoriaAct = ppbIndex!.indiceMemoria + payload.memoria

    const idPpbAlumno = ppbIndex!.idPpbAlumno

    ppbRepo.update({idPpbAlumno : Number(idPpbAlumno)},
        {indiceAtencion : Number(atencionAct),
        indiceMemoria : Number(memoriaAct),
        indicePercepcion : Number(percepcionAct)})
}