import { DataSource } from "typeorm";
import { CatMateria, CatActividad, CatAv,
        CatActividadPpb, CatContenidoMaterias, CatDatoCurioso, CatDesafioDiario,
        CatEscuela, CatTareaDiaria, CatTipoDesbloqueo, TblAlumnoAv,
        TblAlumno, TblIndiceUcbAlumno, TblRegistroDiarioActividades,
        TblResultadosActividad, CatTipoActividad, ViewDetalleActividad, CatRutas, TblSeleccionAv} from "../models";

export const db = new DataSource({
    type: "mssql",
    host: "eu-az-sql-serv1.database.windows.net",
    port: 1433,
    username: "adminptdb",
    password: "Haru&Wero14",
    schema : "dbo",
    database: "AVDBProd",
    connectionTimeout: 5000,
    entities: [CatMateria, CatActividad, CatActividadPpb, CatContenidoMaterias, CatDatoCurioso, CatDesafioDiario,
              CatEscuela, CatAv, CatTareaDiaria, CatTipoDesbloqueo, TblAlumno,
              TblAlumnoAv, TblRegistroDiarioActividades, TblResultadosActividad, TblIndiceUcbAlumno,
              CatTipoActividad, ViewDetalleActividad, CatRutas, TblSeleccionAv],
    synchronize: false,
    options:{
      connectTimeout:5000,
      encrypt: true
    },
    extra:{
    trustServerCertificate: false,
    persistSecurityInfo: false,
  },
})

export default db