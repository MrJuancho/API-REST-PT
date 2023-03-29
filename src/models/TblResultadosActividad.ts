import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAlumno } from "./TblAlumno";
import { CatActividad } from "./CatActividad";

@Index("PK_TBL_ResultadosActividad", ["idActividadPpbAlumno"], { unique: true })
@Entity("TBL_ResultadosActividad", { schema: "dbo" })
export class TblResultadosActividad {
  @PrimaryGeneratedColumn({ type: "int", name: "idActividadPPBAlumno" })
  idActividadPpbAlumno!: number;

  @Column("time", { name: "TiempoResolucion" })
  tiempoResolucion!: Date;

  @Column("int", { name: "Intentos" })
  intentos!: number;

  @Column("int", { name: "Asistencias" })
  asistencias!: number;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblResultadosActividads)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @ManyToOne(
    () => CatActividad,
    (catActividad) => catActividad.tblResultadosActividads
  )
  @JoinColumn([{ name: "idActividad", referencedColumnName: "idActividad" }])
  idActividad!: CatActividad;
}
