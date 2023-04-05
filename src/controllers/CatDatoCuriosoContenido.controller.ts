import { Get, Route, Tags, Path } from "tsoa"
import { CatDatoCurioso } from "../models"
import {
    getDatosCuriososByContenido
} from "../repositories/CatDatoCurioso"

@Route("datoCuriosoContenido")
@Tags("CatDatoCurioso")
export default class CatDatoCuriosoContenidoController {
    @Get("/:id")
    public async getDatosCuriososByContenido(@Path() id: number): Promise<Array<CatDatoCurioso>> {
        return getDatosCuriososByContenido(id);
    }
}