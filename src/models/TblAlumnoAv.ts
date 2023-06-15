import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAlumno } from "./TblAlumno";
import { CatAv } from "./CatAv";

@Index("PK_TBL_AlumnoAV", ["idAvAlumno"], { unique: true })
@Entity("TBL_AlumnoAV", { schema: "dbo" })
export class TblAlumnoAv {
  @PrimaryGeneratedColumn({ type: "int", name: "idAVAlumno" })
  idAvAlumno!: number;

  @Column("datetime", { name: "FechaDesbloqueo" })
  fechaDesbloqueo!: Date;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblAlumnoAvs)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @ManyToOne(() => CatAv, (catAv) => catAv.tblAlumnoAvs)
  @JoinColumn([{ name: "idAV", referencedColumnName: "idAv" }])
  idAv!: CatAv;
}
