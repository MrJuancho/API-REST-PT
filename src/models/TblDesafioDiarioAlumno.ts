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
import { CatDesafioDiario } from "./CatDesafioDiario";
import { TblRegistroDiarioActividades } from "./TblRegistroDiarioActividades";

@Index("PK_TBL_DesafioDiarioAlumno", ["idDesafioAlumno"], { unique: true })
@Entity("TBL_DesafioDiarioAlumno", { schema: "dbo" })
export class TblDesafioDiarioAlumno {
  @PrimaryGeneratedColumn({ type: "int", name: "idDesafioAlumno" })
  idDesafioAlumno!: number;

  @Column("bit", { name: "Completado", nullable: true, default: () => "(0)" })
  completado!: boolean | null;

  @ManyToOne(() => TblAlumno, (tblAlumno) => tblAlumno.tblDesafioDiarioAlumnos)
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @ManyToOne(
    () => CatDesafioDiario,
    (catDesafioDiario) => catDesafioDiario.tblDesafioDiarioAlumnos
  )
  @JoinColumn([{ name: "idDesafioDiario", referencedColumnName: "idDesafio" }])
  idDesafioDiario!: CatDesafioDiario;

  @OneToMany(
    () => TblRegistroDiarioActividades,
    (tblRegistroDiarioActividades) =>
      tblRegistroDiarioActividades.idDesafioDiario
  )
  tblRegistroDiarioActividades?: TblRegistroDiarioActividades[];
}
