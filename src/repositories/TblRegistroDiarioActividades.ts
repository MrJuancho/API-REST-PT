import db from "../config/database"
import { CatDesafioDiario, CatTareaDiaria, TblAlumno, TblRegistroDiarioActividades } from "../models"

export interface uploadRegistroActividadPayload {
    idAlumno : number,
    idDesafioDiario : number,
    idTareaDiaria1: number,
    idTareaDiaria2: number,
    idTareaDiaria3: number,
    Fecha: Date
}

export interface updatetareasCompletadas {
    idAlumno: number,
    fecha: Date
    tareasCompletadas: number,
    desafioCompletado : boolean
}

export const postActividadesDiarias = async (payload : uploadRegistroActividadPayload) : Promise<TblRegistroDiarioActividades> => {
    const regDiario = db.getRepository(TblRegistroDiarioActividades)

    const Tarea1 = await db.getRepository(CatTareaDiaria).findOne({where : { idTareaDiaria : payload.idTareaDiaria1 }})
    const Tarea2 = await db.getRepository(CatTareaDiaria).findOne({where : { idTareaDiaria : payload.idTareaDiaria2 }})
    const Tarea3 = await db.getRepository(CatTareaDiaria).findOne({where : { idTareaDiaria : payload.idTareaDiaria3 }})

    const Desafio = await db.getRepository(CatDesafioDiario).findOne({where : { idDesafio : payload.idDesafioDiario }})

    const Alumno = await db.getRepository(TblAlumno).findOne({where : {idAlumno : payload.idAlumno}})

    const Post = new TblRegistroDiarioActividades()
    Post.idAlumno = Alumno!
    Post.idTareaDiaria = Tarea1!
    Post.idTareaDiaria2 = Tarea2!
    Post.idTareaDiaria3 = Tarea3!
    Post.idDesafioDiario = Desafio!
    Post.tareasCompletadas = 0
    Post.desafioCompletado = false
    Post.fecha = payload.Fecha

    return regDiario.save(Post)
}

export const getRegistroDiarioAlumno = async ( idAlumno :  number) : Promise<Array<TblRegistroDiarioActividades>> => {
    const registrosRepo = db.getRepository(TblRegistroDiarioActividades)

    const registroDiario = await registrosRepo.createQueryBuilder()
                        .where("idAlumno = :idAlumno", { idAlumno : idAlumno })
                        .getMany()

    return registroDiario
}

export const updateActividadesCompletadas = async (payload : updatetareasCompletadas) : Promise<void> => {
    const registrosRepo = db.getRepository(TblRegistroDiarioActividades)

    registrosRepo.update({
            idAlumno : { idAlumno : payload.idAlumno },
            fecha : payload.fecha
        },
        {
            tareasCompletadas : payload.tareasCompletadas,
            desafioCompletado : payload.desafioCompletado
        })
}