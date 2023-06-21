import { Get, Route, Tags, Path } from "tsoa"
import { CatAv } from "../models"
import {
    getAV,
    getAll,
    getTipoAV
} from "../repositories/CatAv"

@Route("AVs")
@Tags("CatAV")
export default class CatAVController {
    @Get("/")
    public async getAVs(): Promise<Array<CatAv>> {
        return getAll()
    }

    @Get("/tipo/:idTipoAV")
    public async getTipodAV(@Path() idTipoAV: number): Promise<Array<CatAv>>{
        return getTipoAV(idTipoAV)
    }

    @Get("/av/:idAV")
    public async getAV(@Path() idAV: number): Promise<CatAv|null>{
        return getAV(idAV)
    }
    
}