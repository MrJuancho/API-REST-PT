import { Get, Route, Tags, Path } from "tsoa"
import { CatContenidoMaterias } from "../models"
import {
    getContenidoMaterias,
    getContenidoMateria
} from "../repositories/CatContenidoMaterias"

@Route("contenidoMaterias")
@Tags("CatContenidoMaterias")
export default class CatContenidoMateriasController {
    @Get("/")
    public async getContenidoMaterias(): Promise<Array<CatContenidoMaterias>> {
        return getContenidoMaterias()
    }

    @Get("/:idContenidoMateria")
    public async getContenidoMateria(@Path() idContenidoMateria: number): Promise<CatContenidoMaterias | null>{
        return getContenidoMateria(idContenidoMateria)
    }
}