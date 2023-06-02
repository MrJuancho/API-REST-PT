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

@Index("PK_TBL_IndiceUCBAlumno", ["idIndicesUcbAlumno"], { unique: true })
@Entity("TBL_IndiceUCBAlumno", { schema: "dbo" })
export class TblIndiceUcbAlumno {
  @PrimaryGeneratedColumn({ type: "int", name: "idIndicesUCBAlumno" })
  idIndicesUcbAlumno!: number;

  @Column("numeric", {
    name: "indiceUCB",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  indiceUcb!: number | null;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblIndiceUcbAlumnos)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @ManyToOne(
    () => CatActividad,
    (catActividad) => catActividad.tblIndiceUcbAlumnos
  )
  @JoinColumn([{ name: "idActividad", referencedColumnName: "idActividad" }])
  idActividad!: CatActividad;
}
