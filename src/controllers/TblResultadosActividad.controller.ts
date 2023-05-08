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
    @Get("/:id")
    public async getResultadosActividad(@Path() id : string): Promise<TblResultadosActividad | null> {
        return getResultadoActividad(Number(id))
    }

    @Post("/")
    public async postResultados(@Body() payload : uploadActividadPayload): Promise<TblResultadosActividad> {
        return createResultado(payload)
    }
}
