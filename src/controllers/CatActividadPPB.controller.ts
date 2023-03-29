import { Get, Route, Tags, Path } from "tsoa"
import { CatActividadPpb } from "../models"
import {
    getActividadesPPB,
    getActividadPPB
} from "../repositories/CatActividadPPB"

@Route("actividadPPB")
@Tags("CatActividadPPB")
export default class CatActividadPPBController {
    @Get("/")
    public async getActividadesPPB(): Promise<Array<CatActividadPpb>> {
        return getActividadesPPB()
    }

    @Get("/:idActividadPPB")
    public async getActividadPPB(@Path() idActividadPPB: number): Promise<CatActividadPpb | null>{
        return getActividadPPB(idActividadPPB)
    }
}