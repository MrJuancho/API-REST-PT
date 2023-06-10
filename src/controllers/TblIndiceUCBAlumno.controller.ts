import { Route, Tags, Get, Put, Post, Body, Path } from "tsoa"
import { TblIndiceUcbAlumno } from "../models"
import {
    getActividadByMostUBC,
    getActividadesOrderByMostUCB,
    pushUCBIndex,
    payloadActividadUCBAlumno,
    putUCBIndex
} from "../repositories/TblIndiceUCBAlumno"

@Route("indiceUCB")
@Tags("Indice UCB Alumnos")
export default class TblIndiceUCBAlumnoController {
    @Get("/:idAlumno")
    public async getActividadesByMostUCB(@Path() idAlumno : string): Promise<Array<TblIndiceUcbAlumno>> {
        return getActividadesOrderByMostUCB(Number(idAlumno))
    }

    @Post("/")
    public async postIndiceUCBAlumno(@Body() payload : payloadActividadUCBAlumno) : Promise<TblIndiceUcbAlumno> {
        return pushUCBIndex(payload)
    }

    @Put("/:idAlumno")
    public async updateIndiceUCPAlumno(@Body() payload : payloadActividadUCBAlumno) : Promise<void> {
        return putUCBIndex(payload)
    }
}