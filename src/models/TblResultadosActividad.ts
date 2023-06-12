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

@Index("PK_TBL_ResultadosActividad", ["idResultadosAlumno"], { unique: true })
@Entity("TBL_ResultadosActividad", { schema: "dbo" })
export class TblResultadosActividad {
  @PrimaryGeneratedColumn({ type: "int", name: "idResultadosAlumno" })
  idResultadosAlumno!: number;

  @Column("time", { name: "TiempoResolucion" })
  tiempoResolucion!: Date;

  @Column("int", { name: "Intentos" })
  intentos!: number;

  @Column("int", { name: "Asistencia" })
  asistencia!: number;

  @Column("datetime", { name: "FechaRealizacion" })
  fechaRealizacion!: Date;

  @Column("decimal", {
    name: "recompensa",
    nullable: true,
    precision: 18,
    scale: 15,
  })
  recompensa!: number | null;

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
