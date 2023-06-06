import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatPropPersonalizacion } from "./CatPropPersonalizacion";
import { TblAsistenteVirtual } from "./TblAsistenteVirtual";

@Index("PK_TBL_DesbloqueosPropsAV", ["idDesbloqueosAv"], { unique: true })
@Entity("TBL_DesbloqueosPropsAV", { schema: "dbo" })
export class TblDesbloqueosPropsAv {
  @PrimaryGeneratedColumn({ type: "int", name: "idDesbloqueosAV" })
  idDesbloqueosAv!: number;

  @Column("datetime", { name: "FechaDesbloqueo", nullable: true })
  fechaDesbloqueo!: Date | null;

  @ManyToOne(
    () => CatPropPersonalizacion,
    (catPropPersonalizacion) => catPropPersonalizacion.tblDesbloqueosPropsAvs
  )
  @JoinColumn([
    {
      name: "idPropsPersonalizacion",
      referencedColumnName: "idPropPersonalizacion",
    },
  ])
  idPropsPersonalizacion!: CatPropPersonalizacion;

  @ManyToOne(
    () => TblAsistenteVirtual,
    (tblAsistenteVirtual) => tblAsistenteVirtual.tblDesbloqueosPropsAvs
  )
  @JoinColumn([{ name: "idAV", referencedColumnName: "idAv" }])
  idAv!: TblAsistenteVirtual;
}
