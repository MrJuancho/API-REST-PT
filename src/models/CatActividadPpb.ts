import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatActividad } from "./CatActividad";
import { CatContenidoMaterias } from "./CatContenidoMaterias";

@Index("PK_CAT_ActividadPPB", ["idActividadPpb"], { unique: true })
@Entity("CAT_ActividadPPB", { schema: "dbo" })
export class CatActividadPpb {
  @PrimaryGeneratedColumn({ type: "int", name: "idActividadPPB" })
  idActividadPpb!: number;

  @Column("int", { name: "IndiceAtencion" })
  indiceAtencion!: number;

  @Column("int", { name: "IndiceMemoria" })
  indiceMemoria!: number;

  @Column("int", { name: "IndicePercepcion" })
  indicePercepcion!: number;

  @Column("int", { name: "IndiceDificultad" })
  indiceDificultad!: number;

  @ManyToOne(
    () => CatActividad,
    (catActividad) => catActividad.catActividadPpbs
  )
  @JoinColumn([{ name: "idActividad", referencedColumnName: "idActividad" }])
  idActividad!: CatActividad;

  @ManyToOne(
    () => CatContenidoMaterias,
    (catContenidoMaterias) => catContenidoMaterias.catActividadPpbs
  )
  @JoinColumn([
    { name: "idContenido", referencedColumnName: "idContenidoMateria" },
  ])
  idContenido!: CatContenidoMaterias;
}
