import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity("VIEW_DetallePPBAlumno", {
    expression: `
    SELECT        dbo.TBL_PPBAlumno.idPPBAlumno, dbo.TBL_Alumno.NombreUsuario, dbo.TBL_Alumno.Nombre, dbo.TBL_Alumno.ApellidoMaterno, dbo.TBL_Alumno.ApellidoPaterno, dbo.TBL_PPBAlumno.IndiceAtencion, 
                         dbo.TBL_PPBAlumno.IndiceMemoria, dbo.TBL_PPBAlumno.IndicePercepcion
    FROM            dbo.TBL_Alumno INNER JOIN
                         dbo.TBL_PPBAlumno ON dbo.TBL_Alumno.idAlumno = dbo.TBL_PPBAlumno.idAlumno`,
})

export class ViewDetallePPBAlumno {
    @ViewColumn()
    idPPBAlumno!: number

    @ViewColumn()
    NombreUsuario!: string

    @ViewColumn()
    Nombre!: string

    @ViewColumn()
    ApellidoPaterno!: string

    @ViewColumn()
    ApellidoMaterno!: string

    @ViewColumn()
    IndiceAtencion!: number

    @ViewColumn()
    IndiceMemoria!: number

    @ViewColumn()
    IndicePercepcion!: number

}