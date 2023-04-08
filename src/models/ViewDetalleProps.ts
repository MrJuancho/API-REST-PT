import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity("VIEW_Detalleprops", {
    expression: `
    SELECT        dbo.CAT_PropPersonalizacion.idPropPersonalizacion, dbo.CAT_PropPersonalizacion.Nom_Prop, dbo.CAT_PropPersonalizacion.Desc_Prop, dbo.CAT_TipoPersonalizacion.Desc_TipoPersonalizacion, 
    dbo.CAT_TipoDesbloqueo.Desc_TipoDebloqueo, dbo.CAT_PropPersonalizacion.Costo
    FROM            dbo.CAT_PropPersonalizacion INNER JOIN
    dbo.CAT_TipoDesbloqueo ON dbo.CAT_PropPersonalizacion.idTipoDebloqueo = dbo.CAT_TipoDesbloqueo.idTipoDesbloqueo INNER JOIN
    dbo.CAT_TipoPersonalizacion ON dbo.CAT_PropPersonalizacion.idTipoPersonalizacion = dbo.CAT_TipoPersonalizacion.idTipoPersonalizacion
    `,
})
export class ViewDetalleProps {
    @ViewColumn()
    idPropPersonalizacion!: number

    @ViewColumn()
    Nom_Prop!: string

    @ViewColumn()
    Desc_Prop!: string

    @ViewColumn()
    Desc_TipoPersonalizacion!: string

    @ViewColumn()
    Desc_TipoDebloqueo!: string

    @ViewColumn()
    Costo!: number
}