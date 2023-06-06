import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatTipoDesbloqueo } from "./CatTipoDesbloqueo";
import { CatTipoPersonalizacion } from "./CatTipoPersonalizacion";
import { TblAsistenteVirtual } from "./TblAsistenteVirtual";
import { TblDesbloqueosPropsAv } from "./TblDesbloqueosPropsAv";

@Index("PK_CAT_PropPersonalizacion", ["idPropPersonalizacion"], {
  unique: true,
})
@Entity("CAT_PropPersonalizacion", { schema: "dbo" })
export class CatPropPersonalizacion {
  @PrimaryGeneratedColumn({ type: "int", name: "idPropPersonalizacion" })
  idPropPersonalizacion!: number;

  @Column("nvarchar", { name: "Nom_Prop", length: 150 })
  nomProp!: string;

  @Column("nvarchar", { name: "Desc_Prop", nullable: true, length: 250 })
  descProp!: string | null;

  @Column("int", { name: "Costo" })
  costo!: number;

  @ManyToOne(
    () => CatTipoDesbloqueo,
    (catTipoDesbloqueo) => catTipoDesbloqueo.catPropPersonalizacions
  )
  @JoinColumn([
    { name: "idTipoDebloqueo", referencedColumnName: "idTipoDesbloqueo" },
  ])
  idTipoDebloqueo!: CatTipoDesbloqueo;

  @ManyToOne(
    () => CatTipoPersonalizacion,
    (catTipoPersonalizacion) => catTipoPersonalizacion.catPropPersonalizacions
  )
  @JoinColumn([
    {
      name: "idTipoPersonalizacion",
      referencedColumnName: "idTipoPersonalizacion",
    },
  ])
  idTipoPersonalizacion!: CatTipoPersonalizacion;

  @OneToMany(
    () => TblAsistenteVirtual,
    (tblAsistenteVirtual) => tblAsistenteVirtual.idCara
  )
  tblAsistenteVirtuals!: TblAsistenteVirtual[];

  @OneToMany(
    () => TblAsistenteVirtual,
    (tblAsistenteVirtual) => tblAsistenteVirtual.idColor
  )
  tblAsistenteVirtuals2!: TblAsistenteVirtual[];

  @OneToMany(
    () => TblAsistenteVirtual,
    (tblAsistenteVirtual) => tblAsistenteVirtual.idPatron
  )
  tblAsistenteVirtuals3!: TblAsistenteVirtual[];

  @OneToMany(
    () => TblAsistenteVirtual,
    (tblAsistenteVirtual) => tblAsistenteVirtual.idPrenda
  )
  tblAsistenteVirtuals4!: TblAsistenteVirtual[];

  @OneToMany(
    () => TblAsistenteVirtual,
    (tblAsistenteVirtual) => tblAsistenteVirtual.idSpecial
  )
  tblAsistenteVirtuals5!: TblAsistenteVirtual[];

  @OneToMany(
    () => TblDesbloqueosPropsAv,
    (tblDesbloqueosPropsAv) => tblDesbloqueosPropsAv.idPropsPersonalizacion
  )
  tblDesbloqueosPropsAvs!: TblDesbloqueosPropsAv[];
}
