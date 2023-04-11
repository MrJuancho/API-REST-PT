import express, { Application } from "express"
import morgan from "morgan"
import swaggerUi from "swagger-ui-express"
import { db } from "./config/database"

import Router from "./routes"

const PORT = process.env.PORT || 8000

const app: Application = express()

app.use(express.json())
app.use(morgan("tiny"))
app.use(express.static("public"))

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      customSiteTitle: "API Asistente Virtual",
      swaggerOptions: {
        url: "/swagger.json",
      },
    }),
  )

  app.use(Router)

  db.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
})