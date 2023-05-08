import { Put, Tags, Route, Body, Get} from "tsoa"
import { UpdateResult } from "typeorm"
import { TblPpbAlumno } from "../models"
import {
    putAlumnoPpb,
    UpdatePpbPayload
} from "../repositories/TBLPpbAlumno"

@Route("alumnoppb")
@Tags("PPB Alumno")
export default class TblPpbAlumnoController {
    @Put("/:nombre")
    public async updatePPBAlumno(@Body() payload : UpdatePpbPayload): Promise<void> {
        return putAlumnoPpb(payload)
    }
}