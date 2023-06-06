import { Get, Route, Tags, Path } from "tsoa"
import { CatRutas } from "../models"
import {
    getOneRuta,
    getRutas
} from "../repositories/CatRutas"

@Route("rutas")
@Tags("CatRutas")
export default class CatRutasController {
    @Get("/")
    public async getRutas(): Promise<Array<CatRutas>> {
        return getRutas()
    }

    @Get("/:id")
    public async getRuta(@Path() id: number): Promise<CatRutas | null>{
        return getOneRuta(id)
    }
}