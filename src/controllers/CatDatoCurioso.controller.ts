import { Get, Route, Tags, Path } from "tsoa"
import { CatDatoCurioso } from "../models"
import {
    getDatosCuriosos,
    getDatoCurioso
} from "../repositories/CatDatoCurioso"

@Route("datoCurioso")
@Tags("CatDatoCurioso")
export default class CatDatoCuriosoController {
    @Get("/")
    public async getDatosCuriosos(): Promise<Array<CatDatoCurioso>> {
        return getDatosCuriosos()
    }

    @Get("/:idDatoCurioso")
    public async getDatoCurioso(@Path() idDatoCurioso: number): Promise<CatDatoCurioso | null>{
        return getDatoCurioso(idDatoCurioso)
    }
}