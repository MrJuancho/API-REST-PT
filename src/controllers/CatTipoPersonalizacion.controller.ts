import { Get, Route, Tags, Path } from "tsoa"
import { CatTipoPersonalizacion } from "../models"
import {
    getAllTiposPersonalizacion,
    getTipoPersonalizacion
} from "../repositories/CatTipoPersonalizacion"

@Route("tipospersonalizacion")
@Tags("CatTipoPersonalizacion")
export default class CatTipoPersonalizacionController {
    @Get("/")
    public async getAllTiposPersonalizacion(): Promise<Array<CatTipoPersonalizacion>> {
        return getAllTiposPersonalizacion()
    }

    @Get("/:name")
    public async getTipoPersonalizacion(@Path() name: string): Promise<CatTipoPersonalizacion | null>{
        return getTipoPersonalizacion(name)
    }
}