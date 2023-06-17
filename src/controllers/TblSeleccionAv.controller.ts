import { Route, Tags, Get, Put, Body, Path } from "tsoa"
import { TblSeleccionAv } from "../models"
import {
    editAVPayload,
    getAlumnoSelectedAV,
    updateSeleccionAV
} from "../repositories/TblSeleccionAv"

@Route("seleccionAV")
@Tags("Asistente Virtual Seleccioando por el Alumno")
export default class TblSeleccionAVController {
    @Get("/:idAlumno")
    public async getAlumnoSelectedAV(@Path() idAlumno : string): Promise<TblSeleccionAv | null> {
        return getAlumnoSelectedAV(Number(idAlumno))
    }

    @Put("/:idAlumno")
    public async updateSelectedAV(@Body() payload : editAVPayload): Promise<void> {
        return updateSeleccionAV(payload)
    }
}