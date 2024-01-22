import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { home } = allControllers


//all router operation
router.get('/', home)


export default router