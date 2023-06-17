import { Get, Route, Tags, Path } from "tsoa"
import { CatAv } from "../models"
import {
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

    @Get("/:id")
    public async getTipodAV(@Path() id: number): Promise<Array<CatAv>>{
        return getTipoAV(id)
    }
}