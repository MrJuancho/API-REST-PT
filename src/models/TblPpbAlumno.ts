import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAlumno } from "./TblAlumno";
import { TblReporteAnalisisDatos } from "./TblReporteAnalisisDatos";

@Index("PK_TBL_PPBAlumno", ["idPpbAlumno"], { unique: true })
@Entity("TBL_PPBAlumno", { schema: "dbo" })
export class TblPpbAlumno {
  @PrimaryGeneratedColumn({ type: "int", name: "idPPBAlumno" })
  idPpbAlumno!: number;

  @Column("int", { name: "IndiceAtencion" })
  indiceAtencion!: number;

  @Column("int", { name: "IndiceMemoria" })
  indiceMemoria!: number;

  @Column("int", { name: "IndicePercepcion" })
  indicePercepcion!: number;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblPpbAlumnos)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @OneToMany(
    () => TblReporteAnalisisDatos,
    (tblReporteAnalisisDatos) => tblReporteAnalisisDatos.idPpbAlumno
  )
  tblReporteAnalisisDatos?: TblReporteAnalisisDatos[];
}
