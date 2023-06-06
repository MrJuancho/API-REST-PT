import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatActividad } from "./CatActividad";

@Index("PK_CAT_TipoActividad", ["idTipoActividad"], { unique: true })
@Entity("CAT_TipoActividad", { schema: "dbo" })
export class CatTipoActividad {
  @PrimaryGeneratedColumn({ type: "int", name: "idTipoActividad" })
  idTipoActividad!: number;

  @Column("nvarchar", { name: "DescripcionTipoActividad", length: 50 })
  descripcionTipoActividad!: string;

  @OneToMany(() => CatActividad, (catActividad) => catActividad.idTipoActividad)
  catActividads!: CatActividad[];
}
