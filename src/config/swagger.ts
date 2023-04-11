import swaggerJsdoc from "swagger-jsdoc"
import { version } from "../../package.json"

const option: swaggerJsdoc.Options = {
    definition: {
        info:{
            title: 'API Asistente Virtual',
            version
        },
        components: {
            securitySchemas:{
                brearerAuth:{
                    type: "http",
                    scheme: "bearer",
                    brearerFormat: "JWT"
                }
            }
        }
    }
}