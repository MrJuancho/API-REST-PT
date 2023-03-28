import { Get, Route, Tags, Path } from "tsoa"
import { CatPropPersonalizacion } from "../models"
import {
    getPropPersonalizacion,
    getAllPropsPersonalizacion
} from "../repositories/CatPropPersonalizacion"

@Route("props")
@Tags("CatPropPersonalizacion")
export default class CatPropPersonalizacionController {
    @Get("/")
    public async getAllPropsPersonalizacion(): Promise<Array<CatPropPersonalizacion>> {
        return getAllPropsPersonalizacion()
    }

    @Get("/:name")
    public async getPropPersonalizacion(@Path() name: string): Promise<CatPropPersonalizacion | null>{
        return getPropPersonalizacion(name)
    }
}