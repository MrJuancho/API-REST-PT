import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAlumno } from "./TblAlumno";
import { CatPropPersonalizacion } from "./CatPropPersonalizacion";
import { TblDesbloqueosPropsAv } from "./TblDesbloqueosPropsAv";

@Index("PK_TBL_AsistenteVirtual", ["idAv"], { unique: true })
@Entity("TBL_AsistenteVirtual", { schema: "dbo" })
export class TblAsistenteVirtual {
  @PrimaryGeneratedColumn({ type: "int", name: "idAV" })
  idAv!: number;

  @OneToMany(() => TblAlumno, (tblAlumno) => tblAlumno.idAv)
  tblAlumnos!: TblAlumno[];

  @ManyToOne(
    () => CatPropPersonalizacion,
    (catPropPersonalizacion) => catPropPersonalizacion.tblAsistenteVirtuals
  )
  @JoinColumn([
    { name: "idCara", referencedColumnName: "idPropPersonalizacion" },
  ])
  idCara!: CatPropPersonalizacion;

  @ManyToOne(
    () => CatPropPersonalizacion,
    (catPropPersonalizacion) => catPropPersonalizacion.tblAsistenteVirtuals2
  )
  @JoinColumn([
    { name: "idColor", referencedColumnName: "idPropPersonalizacion" },
  ])
  idColor!: CatPropPersonalizacion;

  @ManyToOne(
    () => CatPropPersonalizacion,
    (catPropPersonalizacion) => catPropPersonalizacion.tblAsistenteVirtuals3
  )
  @JoinColumn([
    { name: "idPatron", referencedColumnName: "idPropPersonalizacion" },
  ])
  idPatron!: CatPropPersonalizacion;

  @ManyToOne(
    () => CatPropPersonalizacion,
    (catPropPersonalizacion) => catPropPersonalizacion.tblAsistenteVirtuals4
  )
  @JoinColumn([
    { name: "idPrenda", referencedColumnName: "idPropPersonalizacion" },
  ])
  idPrenda!: CatPropPersonalizacion;

  @ManyToOne(
    () => CatPropPersonalizacion,
    (catPropPersonalizacion) => catPropPersonalizacion.tblAsistenteVirtuals5
  )
  @JoinColumn([
    { name: "idSpecial", referencedColumnName: "idPropPersonalizacion" },
  ])
  idSpecial!: CatPropPersonalizacion;

  @OneToMany(
    () => TblDesbloqueosPropsAv,
    (tblDesbloqueosPropsAv) => tblDesbloqueosPropsAv.idAv
  )
  tblDesbloqueosPropsAvs!: TblDesbloqueosPropsAv[];
}
