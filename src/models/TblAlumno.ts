import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatEscuela } from "./CatEscuela";
import { TblAlumnoAv } from "./TblAlumnoAv";
import { TblIndiceUcbAlumno } from "./TblIndiceUcbAlumno";
import { TblRegistroDiarioActividades } from "./TblRegistroDiarioActividades";
import { TblResultadosActividad } from "./TblResultadosActividad";
import { TblSeleccionAv } from "./TblSeleccionAv";

@Index("PK_TBL_Alumno", ["idAlumno"], { unique: true })
@Entity("TBL_Alumno", { schema: "dbo" })
export class TblAlumno {
  @PrimaryGeneratedColumn({ type: "int", name: "idAlumno" })
  idAlumno!: number;

  @Column("nvarchar", { name: "Nombre", length: 50 })
  nombre!: string;

  @Column("nvarchar", { name: "ApellidoMaterno", length: 50 })
  apellidoMaterno!: string;

  @Column("nvarchar", { name: "ApellidoPaterno", length: 50 })
  apellidoPaterno!: string;

  @Column("smallint", { name: "NoLista" })
  noList!: number;

  @Column("date", { name: "FechaNacimiento", nullable: true })
  fechaNacimiento!: Date | null;

  @Column("nvarchar", { name: "NombreUsuario", nullable: true, length: 50 })
  nombreUsuario!: string | null;

  @Column("nvarchar", { name: "ClaveAcceso", nullable: true, length: 50 })
  claveAcceso!: string | null;

  @Column("int", { name: "BalanceEstrellas", default: () => "(0)" })
  balanceEstrellas!: number;

  @Column("int", { name: "BalanceMonedas", default: () => "(0)" })
  balanceMonedas!: number;

  @ManyToOne(() => CatEscuela, (catEscuela) => catEscuela.tblAlumnos)
  @JoinColumn([{ name: "CCT", referencedColumnName: "cct" }])
  cct!: CatEscuela;

  @OneToMany(() => TblAlumnoAv, (tblAlumnoAv) => tblAlumnoAv.idAlumno)
  tblAlumnoAvs?: TblAlumnoAv[];

  @OneToMany(
    () => TblIndiceUcbAlumno,
    (tblIndiceUcbAlumno) => tblIndiceUcbAlumno.idAlumno
  )
  tblIndiceUcbAlumnos?: TblIndiceUcbAlumno[];

  @OneToMany(
    () => TblRegistroDiarioActividades,
    (tblRegistroDiarioActividades) => tblRegistroDiarioActividades.idAlumno
  )
  tblRegistroDiarioActividades?: TblRegistroDiarioActividades[];

  @OneToMany(
    () => TblResultadosActividad,
    (tblResultadosActividad) => tblResultadosActividad.idAlumno
  )
  tblResultadosActividads?: TblResultadosActividad[];

  @OneToMany(() => TblSeleccionAv, (tblSeleccionAv) => tblSeleccionAv.idAlumno)
  tblSeleccionAvs?: TblSeleccionAv[];
}
