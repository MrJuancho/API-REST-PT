import { DataSource } from "typeorm";
import { CatMateria, CatActividad,
        CatActividadPpb, CatContenidoMaterias,
        CatDatoCurioso, CatDesafioDiario,
        CatEscuela, CatPropPersonalizacion,
        CatTareaDiaria, CatTipoDesbloqueo,
        CatTipoPersonalizacion, TblAlumno,
        TblAsistenteVirtual, TblAnalisisDeDatos,
        TblDesafioDiarioAlumno, TblDesbloqueosPropsAv,
        TblPpbAlumno, TblRegistroDiarioActividades,
        TblReporteAnalisisDatos, TblResultadosActividad,
        TblTareasDiariasAlumno } from "../models";

export const AV_DB = new DataSource({
    type: "mssql",
    host: "eu-az-sql-serv1.database.windows.net",
    port: 1433,
    username: "adminptdb",
    password: "Haru&Wero14",
    schema : "dbo",
    database: "AVDBProd",
    connectionTimeout: 30,
    entities: [CatMateria, CatActividad, CatActividadPpb, CatContenidoMaterias, CatDatoCurioso, CatDesafioDiario,
              CatEscuela, CatPropPersonalizacion, CatTareaDiaria, CatTipoDesbloqueo, CatTipoPersonalizacion, TblAlumno,
              TblAsistenteVirtual, TblAnalisisDeDatos, TblDesafioDiarioAlumno, TblDesafioDiarioAlumno, TblDesbloqueosPropsAv,
              TblPpbAlumno, TblRegistroDiarioActividades, TblReporteAnalisisDatos, TblResultadosActividad, TblTareasDiariasAlumno],
    synchronize: false,
    options:{
      connectTimeout:5000,
    },
    extra:{
    trustServerCertificate: false,
    persistSecurityInfo: false,
  }
})

export default AV_DB