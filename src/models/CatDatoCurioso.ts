import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatContenidoMaterias } from "./CatContenidoMaterias";

@Index("PK_CAT_DatoCurioso", ["idDatoCurioso"], { unique: true })
@Entity("CAT_DatoCurioso", { schema: "dbo" })
export class CatDatoCurioso {
  @PrimaryGeneratedColumn({ type: "int", name: "idDatoCurioso" })
  idDatoCurioso!: number;

  @Column("nvarchar", { name: "DescripcionDatos", nullable: true })
  descripcionDatos!: string | null;

  @ManyToOne(
    () => CatContenidoMaterias,
    (catContenidoMaterias) => catContenidoMaterias.catDatoCuriosos
  )
  @JoinColumn([
    { name: "idContenidoMateria", referencedColumnName: "idContenidoMateria" },
  ])
  idContenidoMateria!: CatContenidoMaterias;
}
