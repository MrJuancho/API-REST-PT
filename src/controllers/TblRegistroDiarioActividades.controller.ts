import { Route, Tags, Get, Put, Post, Body, Path } from "tsoa";
import { TblRegistroDiarioActividades } from "../models";
import { getRegistroDiarioAlumno,
    postActividadesDiarias,
    updateActividadesCompletadas,
    updatetareasCompletadas,
    uploadRegistroActividadPayload } from "../repositories/TblRegistroDiarioActividades";

@Route("registroDiario")
@Tags("RegistroDiarioTareas")
export default class TblRegistroDiarioActividadesController {
    @Get("/:idUser")
    public async getRegistroAlumno(@Path() idUser : string): Promise<Array<TblRegistroDiarioActividades>> {
        return getRegistroDiarioAlumno(Number(idUser))
    }

    @Post("/")
    public async postRegistroDiario(@Body() payload : uploadRegistroActividadPayload) : Promise<TblRegistroDiarioActividades> {
        return postActividadesDiarias(payload)
    }

    @Put("/:idAlumno")
    public async updateTareasCompletadas(@Body() payload : updatetareasCompletadas) : Promise<void> {
        return updateActividadesCompletadas(payload)
    }
}