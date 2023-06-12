import { Tags, Body, Get, Route, Path, Post, Put} from "tsoa"
import { TblResultadosActividad} from "../models"
import {
    getResultadoActividad,
    createResultado,
    uploadActividadPayload,
    getAllResultados,
    updateRecompensaPayload,
    updateRecompensas
} from "../repositories/TblResultadosActividad"

@Route("resultadoActividad")
@Tags("Resultados Actividad")
export default class TblResultadosActividadController {
    @Get("/:date")
    public async getResultadosActividad(@Path() date: string): Promise<Array<TblResultadosActividad>> {
        return getResultadoActividad(date)
    }

    @Get("/")
    public async getResultados(): Promise<Array<TblResultadosActividad>> {
        return getAllResultados()
    }

    @Post("/")
    public async postResultados(@Body() payload : uploadActividadPayload): Promise<TblResultadosActividad> {
        return createResultado(payload)
    }

    @Put("/:idResultado")
    public async updateRecompensaActividad(@Body() payload : updateRecompensaPayload): Promise<void> {
        return updateRecompensas(payload)
    }
}
