import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblAlumno } from "./TblAlumno";
import { CatTareaDiaria } from "./CatTareaDiaria";
import { CatDesafioDiario } from "./CatDesafioDiario";

@Index("PK_TBL_RegistroDiarioActividades", ["idRegistroDiarioActividades"], {
  unique: true,
})
@Entity("TBL_RegistroDiarioActividades", { schema: "dbo" })
export class TblRegistroDiarioActividades {
  @PrimaryGeneratedColumn({ type: "int", name: "idRegistroDiarioActividades" })
  idRegistroDiarioActividades!: number;

  @Column("int", { name: "TareasCompletadas" })
  tareasCompletadas!: number;

  @Column("bit", { name: "DesafioCompletado" })
  desafioCompletado!: boolean;

  @Column("date", { name: "Fecha" })
  fecha!: Date;

  @ManyToOne(
    () => TblAlumno,
    (tblAlumno) => tblAlumno.tblRegistroDiarioActividades
  )
  @JoinColumn([{ name: "idAlumno", referencedColumnName: "idAlumno" }])
  idAlumno!: TblAlumno;

  @ManyToOne(
    () => CatTareaDiaria,
    (catTareaDiaria) => catTareaDiaria.tblRegistroDiarioActividades
  )
  @JoinColumn([
    { name: "idTareaDiaria1", referencedColumnName: "idTareaDiaria" },
  ])
  idTareaDiaria!: CatTareaDiaria;

  @ManyToOne(
    () => CatTareaDiaria,
    (catTareaDiaria) => catTareaDiaria.tblRegistroDiarioActividades2
  )
  @JoinColumn([
    { name: "idTareaDiaria2", referencedColumnName: "idTareaDiaria" },
  ])
  idTareaDiaria2!: CatTareaDiaria;

  @ManyToOne(
    () => CatTareaDiaria,
    (catTareaDiaria) => catTareaDiaria.tblRegistroDiarioActividades3
  )
  @JoinColumn([
    { name: "idTareaDiaria3", referencedColumnName: "idTareaDiaria" },
  ])
  idTareaDiaria3!: CatTareaDiaria;

  @ManyToOne(
    () => CatDesafioDiario,
    (catDesafioDiario) => catDesafioDiario.tblRegistroDiarioActividades
  )
  @JoinColumn([{ name: "idDesafioDiario", referencedColumnName: "idDesafio" }])
  idDesafioDiario!: CatDesafioDiario;
}
