import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblRegistroDiarioActividades } from "./TblRegistroDiarioActividades";

@Index("PK_CAT_TareaDiaria", ["idTareaDiaria"], { unique: true })
@Entity("CAT_TareaDiaria", { schema: "dbo" })
export class CatTareaDiaria {
  @PrimaryGeneratedColumn({ type: "int", name: "idTareaDiaria" })
  idTareaDiaria!: number;

  @Column("nvarchar", { name: "DescripcionTarea", nullable: true, length: 250 })
  descripcionTarea!: string | null;

  @Column("int", { name: "Monedas", nullable: true })
  monedas!: number | null;

  @Column("int", { name: "Estrellas", nullable: true })
  estrellas!: number | null;

  @OneToMany(
    () => TblRegistroDiarioActividades,
    (tblRegistroDiarioActividades) => tblRegistroDiarioActividades.idTareaDiaria
  )
  tblRegistroDiarioActividades?: TblRegistroDiarioActividades[];

  @OneToMany(
    () => TblRegistroDiarioActividades,
    (tblRegistroDiarioActividades) =>
      tblRegistroDiarioActividades.idTareaDiaria2
  )
  tblRegistroDiarioActividades2?: TblRegistroDiarioActividades[];

  @OneToMany(
    () => TblRegistroDiarioActividades,
    (tblRegistroDiarioActividades) =>
      tblRegistroDiarioActividades.idTareaDiaria3
  )
  tblRegistroDiarioActividades3?: TblRegistroDiarioActividades[];
}
