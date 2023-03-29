import db from "../config/database"
import { TblAlumno } from "../models"

export interface AlumnoDataPayload {
    nombre : string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    noLista: number,
    fechaNac: string,
    nombreUsuario: string,
    claveAcceso: string,
    balanceMonedas: number,
    balanceEstrellas: Number
}

export const getAlumnos = async () : Promise<Array<TblAlumno>> => {
    const alumnoRepository = db.getRepository(TblAlumno)
    return alumnoRepository.find()
}

export const getAlumnoByUsername = async (username : string) : Promise<TblAlumno | null> => {
    const alumnoRepository = db.getRepository(TblAlumno)
    const alumno = await alumnoRepository.findOne({ where: { nombreUsuario : username}})

    if(!alumno) return null
    return alumno
}

//export const createAlumno = async (payload : AlumnoDataPayload): Promise<TblAlumno> => {
    //const alumnoRepository = db.getRepository(TblAlumno)
    //const alumno = new TblAlumno();
    //payload.nombre = alumno.nombre
    //payload.apellidoMaterno = alumno.apellidoMaterno
    //payload.apellidoPaterno = alumno.apellidoPaterno
    //payload.noLista = alumno.noLista
    //payload.fechaNac
//}