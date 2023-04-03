import db from "../config/database"
import { TblAlumno} from "../models"

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

export interface AlumnoCreditsInterface {
    username : string,
    monedas : number,
    estrellas : number
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

export const putAlumnoCreds = async (payload :  AlumnoCreditsInterface) : Promise<void> => {
    const alumnoRepo = db.getRepository(TblAlumno)

    const alumnoActual = await alumnoRepo.findOne({ where: { nombreUsuario: payload.username}})
    const estrellasAct = alumnoActual!.balanceEstrellas
    const monedasAct = alumnoActual!.balanceMonedas

    const nuevasEstrellas = estrellasAct + payload.estrellas
    const nuevasMonedas = monedasAct + payload.monedas

    alumnoRepo.update({ nombreUsuario: payload.username }, { balanceEstrellas: nuevasEstrellas, balanceMonedas: nuevasMonedas })
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