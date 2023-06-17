import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAlumnoAv } from "./TblAlumnoAv";
import { TblAlumno } from "./TblAlumno";

@Index("PK_TBL_SeleccionAV", ["idSeleccionAv"], { unique: true })
@Entity("TBL_SeleccionAV", { schema: "dbo" })
export class TblSeleccionAv {
  @PrimaryGeneratedColumn({ type: "int", name: "idSeleccionAV" })
  idSeleccionAv!: number;

  @ManyToOne(() => TblAlumnoAv, (tblAlumnoAv) => tblAlumnoAv.tblSeleccionAvs)
  @JoinColumn([{ name: "idAlumnoAV", referencedColumnName: "idAvAlumno" }])
  idAlumnoAv!: TblAlumnoAv;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblSeleccionAvs)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;
}
