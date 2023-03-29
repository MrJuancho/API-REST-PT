import { Get, Route, Tags, Path } from "tsoa"
import { CatDesafioDiario } from "../models"
import {
    getDesafiosDiarios,
    getDesafioDiario
} from "../repositories/CatDesafioDiario"

@Route("desafioDiario")
@Tags("CatDesafioDiario")
export default class CatDesafioDiarioController {
    @Get("/")
    public async getDesafiosDiarios(): Promise<Array<CatDesafioDiario>> {
        return getDesafiosDiarios()
    }

    @Get("/:idDesafioDiario")
    public async getDesafioDiario(@Path() idDesafioDiario: number): Promise<CatDesafioDiario | null>{
        return getDesafioDiario(idDesafioDiario)
    }
}