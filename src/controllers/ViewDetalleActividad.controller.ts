import { Get, Route, Tags, Path } from "tsoa"
import { ViewDetalleActividad } from "../models"
import {
    getDetalleActividad,
    getDetalleActividadById,
    getDetalleActividadbyTipoActividad
} from "../repositories/ViewDetalleActividad"

@Route("detalleActividad")
@Tags("ViewDetalleActividad")
export default class DetalleActividadController {
    @Get("/")
    public async getActividades(): Promise<Array<ViewDetalleActividad>> {
        return getDetalleActividad()
    }

    @Get("/:id")
    public async getActividad(@Path() id: string): Promise<ViewDetalleActividad | null> {
        return getDetalleActividadById(Number(id))
    }
}

@Route("detalleActividadTipoActividad")
@Tags("ViewDetalleActividad")
export class DetalleActividadTipoActividadController {
    @Get("/:name")
    public async getActividadByTipoActividad(@Path() name: string): Promise<ViewDetalleActividad | null> {
        return getDetalleActividadbyTipoActividad(name)
    }
}