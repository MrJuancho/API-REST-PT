import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity("VIEW_DetalleActividad", {
    expression: `
    SELECT        dbo.CAT_Actividad.idActividad, dbo.CAT_Actividad.NombreActividad, dbo.CAT_Actividad.Descripcion, dbo.CAT_ActividadPPB.IndiceAtencion, dbo.CAT_ActividadPPB.IndiceMemoria, dbo.CAT_ActividadPPB.IndicePercepcion, 
                         dbo.CAT_ActividadPPB.IndiceDificultad, dbo.CAT_TipoActividad.DescripcionTipoActividad, dbo.CAT_Materia.DescripcionMateria, dbo.CAT_ContenidoMaterias.Descripcion AS Expr1, dbo.CAT_ContenidoMaterias.Bloque
    FROM            dbo.CAT_Actividad INNER JOIN
                         dbo.CAT_ActividadPPB ON dbo.CAT_Actividad.idActividad = dbo.CAT_ActividadPPB.idActividad INNER JOIN
                         dbo.CAT_ContenidoMaterias ON dbo.CAT_ActividadPPB.idContenido = dbo.CAT_ContenidoMaterias.idContenidoMateria INNER JOIN
                         dbo.CAT_Materia ON dbo.CAT_ContenidoMaterias.idMateria = dbo.CAT_Materia.idMateria INNER JOIN
                         dbo.CAT_TipoActividad ON dbo.CAT_Actividad.idTipoActividad = dbo.CAT_TipoActividad.idTipoActividad`,
})
export class ViewDetalleActividad {
    @ViewColumn()
    idActividad!: number

    @ViewColumn()
    NombreActividad!: string

    @ViewColumn()
    Descripcion!: string

    @ViewColumn()
    IndiceMemoria!: number

    @ViewColumn()
    IndicePercepcion!: number

    @ViewColumn()
    IndiceAtencion!: number

    @ViewColumn()
    IndiceDificultad!: number

    @ViewColumn()
    DescripcionTipoActividad!: string

    @ViewColumn()
    DescripcionMateria!: string

    @ViewColumn()
    DescripcionContenido!: string

    @ViewColumn()
    Bloque!: number
}