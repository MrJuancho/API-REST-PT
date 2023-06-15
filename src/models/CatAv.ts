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
import { TblAlumnoAv } from "./TblAlumnoAv";

@Index("PK_CAT_AV", ["idAv"], { unique: true })
@Entity("CAT_AV", { schema: "dbo" })
export class CatAv {
  @PrimaryGeneratedColumn({ type: "int", name: "idAV" })
  idAv!: number;

  @Column("nvarchar", { name: "NombreAV", length: 150 })
  nombreAv!: string;

  @Column("int", { name: "Costo" })
  costo!: number;

  @ManyToOne(
    () => CatTipoDesbloqueo,
    (catTipoDesbloqueo) => catTipoDesbloqueo.catAvs
  )
  @JoinColumn([
    { name: "idTipoDesbloqueo", referencedColumnName: "idTipoDesbloqueo" },
  ])
  idTipoDesbloqueo?: CatTipoDesbloqueo;

  @OneToMany(() => TblAlumnoAv, (tblAlumnoAv) => tblAlumnoAv.idAv)
  tblAlumnoAvs?: TblAlumnoAv[];
}
