import { Get, Route, Tags, Path, Body, Put } from "tsoa"
import { TblAlumno } from "../models"
import {
    getAlumnoByUsername,
    getAlumnos,
    AlumnoCreditsInterface,
    putAlumnoCreds
} from "../repositories/TblAlumno"

@Route("alumno")
@Tags("TblAlumno")
export default class TblAlumnoController {
    @Get("/")
    public async getAlumnos(): Promise<Array<TblAlumno>>{
        return getAlumnos()
    }

    @Get("/:username")
    public async getAlumnoByUsername(@Path() username: string): Promise<TblAlumno | null> {
        return getAlumnoByUsername(username)
    }

    @Put("/:username")
    public async updateAlumnoCreds(@Body() payload: AlumnoCreditsInterface): Promise<void> {
        return putAlumnoCreds(payload)
    }
}
