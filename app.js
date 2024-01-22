import express, { json } from "express"
import { home } from './routes/index.js'
import cors from 'cors'


const app = express()
app.use(json())
app.use(cors()) 

app.use('/', home)



export default app
