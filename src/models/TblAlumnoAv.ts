import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatAv } from "./CatAv";
import { TblAlumno } from "./TblAlumno";
import { TblSeleccionAv } from "./TblSeleccionAv";

@Index("PK_TBL_AlumnoAV", ["idAvAlumno"], { unique: true })
@Entity("TBL_AlumnoAV", { schema: "dbo" })
export class TblAlumnoAv {
  @PrimaryGeneratedColumn({ type: "int", name: "idAVAlumno" })
  idAvAlumno!: number;

  @Column("datetime", { name: "FechaDesbloqueo" })
  fechaDesbloqueo!: Date;

  @ManyToOne(() => CatAv, (catAv) => catAv.tblAlumnoAvs)
  @JoinColumn([{ name: "idAV", referencedColumnName: "idAv" }])
  idAv!: CatAv;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblAlumnoAvs)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @OneToMany(
    () => TblSeleccionAv,
    (tblSeleccionAv) => tblSeleccionAv.idAlumnoAv
  )
  tblSeleccionAvs?: TblSeleccionAv[];
}
