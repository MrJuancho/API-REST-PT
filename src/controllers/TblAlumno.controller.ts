import { Get, Route, Tags, Path, Body, Request, Post, Put } from "tsoa"
import { TblAlumno } from "../models"
import {
    getAlumnoByUsername,
    getAlumnos

} from "../repositories/TblAlumno"

@Route("alumno")
@Tags("TblAlumno")
export default class TblAlumnoController {
    @Get("/:nombre")
    public async getAlumnoByUsername(@Path() nombre: string): Promise<TblAlumno | null> {
        return getAlumnoByUsername(nombre)
    }

    @Get("/")
    public async getAlumnos(): Promise<Array<TblAlumno>>{
        return getAlumnos()
    }
}
