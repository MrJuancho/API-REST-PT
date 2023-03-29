import { Get, Route, Tags, Path } from "tsoa"
import { CatTareaDiaria } from "../models"
import {
    getTareasDiarias,
    getTareaDiaria
} from "../repositories/CatTareaDiaria"

@Route("tareaDiaria")
@Tags("CatTareaDiaria")
export default class CatTareaDiariaController {
    @Get("/")
    public async getTareasDiarias(): Promise<Array<CatTareaDiaria>> {
        return getTareasDiarias()
    }

    @Get("/:idTareaDiaria")
    public async getTareaDiaria(@Path() idTareaDiaria: number): Promise<CatTareaDiaria | null>{
        return getTareaDiaria(idTareaDiaria)
    }
}