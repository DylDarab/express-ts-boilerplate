import express, { Application } from 'express'
import dotenv from 'dotenv'
import routes from './src/routes'
import cors from 'cors'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
