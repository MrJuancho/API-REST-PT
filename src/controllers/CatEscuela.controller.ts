import { Get, Route, Tags, Path } from "tsoa"
import { CatActividad, CatEscuela } from "../models"
import {
    getEscuelas,
    getEscuela
} from "../repositories/CatEscuela"

@Route("escuelas")
@Tags("CatEscuela")
export default class CatEscuelaController {
    @Get("/")
    public async getEscuelas(): Promise<Array<CatEscuela>> {
        return getEscuelas()
    }

    @Get("/:name")
    public async getEscuela(@Path() name: string): Promise<CatEscuela | null>{
        return getEscuela(name)
    }
}