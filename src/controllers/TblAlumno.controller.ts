import { Get, Route, Tags, Path, Body, Request, Post, Put } from "tsoa"
import { TblAlumno } from "../models"
import {
    getAlumnoByUsername

} from "../repositories/TblAlumno"

@Route("alumno")
@Tags("TblAlumno")
export default class TblAlumnoController {
    @Get("/:nombre")
    public async getAlumnoByUsername(@Path() nombre: string): Promise<TblAlumno | null> {
        return getAlumnoByUsername(nombre)
    }

    /* @Get("/:idDatoCurioso")
    public async getDatoCurioso(@Path() idDatoCurioso: number): Promise<TblAlumno | null>{
        return getDatoCurioso(idDatoCurioso)
    } */
}
