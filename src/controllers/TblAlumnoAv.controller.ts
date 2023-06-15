import { Route, Tags, Get, Post, Body, Path } from "tsoa"
import { TblAlumnoAv } from "../models"
import {
    getAVByAlumno,
    newAVPayload,
    unlockAV
} from "../repositories/TblAlumnoAV"

@Route("alumnoAV")
@Tags("Desbloqueos AV por Alumno")
export default class TblAlumnoAVController {
    @Get("/:idAlumno")
    public async getAvByAlumno(@Path() idAlumno: string): Promise<Array<TblAlumnoAv>> {
        return getAVByAlumno(Number(idAlumno))
    }

    @Post("/")
    public async postAVUnlock(@Body() payload : newAVPayload): Promise<TblAlumnoAv> {
        return unlockAV(payload)
    }
}