import { DataSource } from "typeorm";
import { CatMateria, CatActividad,
        CatActividadPpb, CatContenidoMaterias, CatDatoCurioso, CatDesafioDiario,
        CatEscuela, CatPropPersonalizacion, CatTareaDiaria, CatTipoDesbloqueo,
        CatTipoPersonalizacion, TblAlumno, TblAsistenteVirtual, TblIndiceUcbAlumno,
        TblDesbloqueosPropsAv, TblRegistroDiarioActividades,
        TblResultadosActividad, ViewDetalleProps, CatTipoActividad, ViewDetalleActividad} from "../models";

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
              CatEscuela, CatPropPersonalizacion, CatTareaDiaria, CatTipoDesbloqueo, CatTipoPersonalizacion, TblAlumno,
              TblAsistenteVirtual, TblDesbloqueosPropsAv, TblRegistroDiarioActividades, TblResultadosActividad, TblIndiceUcbAlumno,
              CatTipoActividad, ViewDetalleProps, ViewDetalleActividad],
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