import { Get, Route, Tags, Path } from "tsoa"
import { CatActividad } from "../models"
import {
    getActividades,
    getActividad
} from "../repositories/CatActividad"

@Route("actividades")
@Tags("CatActividad")
export default class CatActividadController {
    @Get("/")
    public async getActividades(): Promise<Array<CatActividad>> {
        return getActividades()
    }

    @Get("/:name")
    public async getActividad(@Path() name: string): Promise<CatActividad | null>{
        return getActividad(name)
    }
}