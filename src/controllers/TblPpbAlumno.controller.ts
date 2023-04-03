import { Put, Tags, Route, Body, Get} from "tsoa"
import { UpdateResult } from "typeorm"
import { TblPpbAlumno } from "../models"
import {
    putAlumnoPpb,
    UpdatePpbPayload
} from "../repositories/TBL_PpbAlumno"

@Route("alumnoppb")
@Tags("PPB Alumno")
export default class TblPpbAlumnoController {
    @Put("/:nombre")
    public async updatePPBAlumno(@Body() payload : UpdatePpbPayload): Promise<void> {
        console.log("aquii")
        return putAlumnoPpb(payload)
    }
}