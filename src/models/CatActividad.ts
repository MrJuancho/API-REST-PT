import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatTipoActividad } from "./CatTipoActividad";
import { CatActividadPpb } from "./CatActividadPpb";
import { TblIndiceUcbAlumno } from "./TblIndiceUcbAlumno";
import { TblResultadosActividad } from "./TblResultadosActividad";

@Index("PK_CAT_Actividad", ["idActividad"], { unique: true })
@Entity("CAT_Actividad", { schema: "dbo" })
export class CatActividad {
  @PrimaryGeneratedColumn({ type: "int", name: "idActividad" })
  idActividad!: number;

  @Column("nvarchar", { name: "NombreActividad", length: 150 })
  nombreActividad!: string;

  @Column("nvarchar", { name: "Descripcion", nullable: true })
  descripcion!: string | null;

  @ManyToOne(
    () => CatTipoActividad,
    (catTipoActividad) => catTipoActividad.catActividads
  )
  @JoinColumn([
    { name: "idTipoActividad", referencedColumnName: "idTipoActividad" },
  ])
  idTipoActividad!: CatTipoActividad;

  @OneToMany(
    () => CatActividadPpb,
    (catActividadPpb) => catActividadPpb.idActividad
  )
  catActividadPpbs!: CatActividadPpb[];

  @OneToMany(
    () => TblIndiceUcbAlumno,
    (tblIndiceUcbAlumno) => tblIndiceUcbAlumno.idActividad
  )
  tblIndiceUcbAlumnos!: TblIndiceUcbAlumno[];

  @OneToMany(
    () => TblResultadosActividad,
    (tblResultadosActividad) => tblResultadosActividad.idActividad
  )
  tblResultadosActividads!: TblResultadosActividad[];
}
