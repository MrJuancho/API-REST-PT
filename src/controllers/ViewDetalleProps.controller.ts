import { Get, Route, Tags, Path } from "tsoa"
import { ViewDetalleProps } from "../models"
import {
    getAllDetalleProps,
    getDetalleProps
} from "../repositories/ViewDetalleProps"

@Route("detalleProps")
@Tags("ViewDetalleProps")
export default class ViewDetallePropsController {
    @Get("/")
    public async getAllDetalleProps(): Promise<Array<ViewDetalleProps>> {
        return getAllDetalleProps()
    }

    @Get("/:id")
    public async getDetalleProps(@Path() id: string): Promise<ViewDetalleProps | null>{
        return getDetalleProps(Number(id))
    }
}