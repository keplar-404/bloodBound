import express, { json } from "express"
import { home } from './routes'
import cors from 'cors'


const app = express()
app.use(json())
app.use(cors()) 

app.use('/', home)

// shammo codes here



// shehub codes here



export default app
