import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CatActividad } from "./CatActividad";

@Index("PK_CAT_Rutas", ["idRutas"], { unique: true })
@Entity("CAT_Rutas", { schema: "dbo" })
export class CatRutas {
  @PrimaryGeneratedColumn({ type: "int", name: "IDRutas" })
  idRutas!: number;

  @Column("nvarchar", { name: "Rutas", length: 50 })
  rutas!: string;

  @ManyToOne(() => CatActividad, (catActividad) => catActividad.catRutas)
  @JoinColumn([{ name: "IDActividades", referencedColumnName: "idActividad" }])
  idActividades!: CatActividad;
}
