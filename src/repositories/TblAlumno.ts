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

export interface AlumnoSessionPayload {
    username : string,
    password : string
}

export interface AlumnoBasicDataPayload {
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string
}

export const getAlumnos = async () : Promise<Array<TblAlumno>> => {
    const alumnoRepository = db.getRepository(TblAlumno)
    return alumnoRepository.find()
}

export const getAlumnoByBasicData = async (payload: AlumnoBasicDataPayload) : Promise<TblAlumno | null> => {
    const alumnoRepository = db.getRepository(TblAlumno)
    const alumno = await alumnoRepository.findOne({ where: {
        nombre : payload.nombre,
        apellidoMaterno : payload.apellidoMaterno,
        apellidoPaterno : payload.apellidoPaterno
    }})

    if(!alumno) return null
    return alumno
}

export const getAlumnoByUsername = async (username : string) : Promise<TblAlumno | null> => {
    const alumnoRepository = db.getRepository(TblAlumno)
    const alumno = await alumnoRepository.findOne({ where: { nombreUsuario : username}})

    if(!alumno) return null
    return alumno
}

export const getAlumnoSession = async ( payload : AlumnoSessionPayload ) : Promise<TblAlumno | null> => {
    const alumnoRepository = db.getRepository(TblAlumno)
    const session = await alumnoRepository.findOne({ where : {
        nombreUsuario : payload.username,
        claveAcceso : payload.password
    }})

    if(!session) return null
    return session
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