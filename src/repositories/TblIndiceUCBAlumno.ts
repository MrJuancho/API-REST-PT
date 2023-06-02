import db from "../config/database"
import { TblAlumno, TblIndiceUcbAlumno, CatActividad } from "../models"

export interface payloadActividadUCBAlumno {
    idAlumno : number,
    idActividad: number,
    indiceUCB: number
}