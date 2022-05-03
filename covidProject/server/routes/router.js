import express from 'express'
const router = express.Router()
import {getData,filterInfo,initInfo} from '../controllers/covidController.js'
router.get('/',getData)
router.get('/filter/',filterInfo)
router.get('/init',initInfo)
export default router
