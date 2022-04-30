import express from 'express'
const router = express.Router()
import {getData,filterInfo} from '../controllers/covidController.js'
router.get('/',getData)
router.get('/filter/',filterInfo)
export default router
