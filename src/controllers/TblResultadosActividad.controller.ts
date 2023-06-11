import { Tags, Body, Get, Route, Path, Post} from "tsoa"
import { TblResultadosActividad} from "../models"
import {
    getResultadoActividad,
    createResultado,
    uploadActividadPayload
} from "../repositories/TblResultadosActividad"

@Route("resultadoActividad")
@Tags("Resultados Actividad")
export default class TblResultadosActividadController {
    @Get("/:date")
    public async getResultadosActividad(@Path() date: string): Promise<Array<TblResultadosActividad>> {
        return getResultadoActividad(date)
    }

    @Post("/")
    public async postResultados(@Body() payload : uploadActividadPayload): Promise<TblResultadosActividad> {
        return createResultado(payload)
    }
}
