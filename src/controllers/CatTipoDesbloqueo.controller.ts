import { Get, Route, Tags, Path } from "tsoa"
import { CatTipoDesbloqueo } from "../models"
import {
    getTipoDesbloqueo,
    getTipoDesbloqueos
} from "../repositories/CatTipoDesbloqueo"

@Route("tiposDesbloqueo")
@Tags("CatTipoDesbloqueo")
export default class CatTipoDesbloqueoController {
    @Get("/")
    public async getTiposDesbloqueo(): Promise<Array<CatTipoDesbloqueo>> {
        return getTipoDesbloqueos()
    }

    @Get("/:name")
    public async getTipoDesbloqueo(@Path() name: string): Promise<CatTipoDesbloqueo | null>{
        return getTipoDesbloqueo(name)
    }
}