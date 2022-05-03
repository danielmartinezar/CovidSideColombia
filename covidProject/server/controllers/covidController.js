//@desc Get data from mongodb
//@route /api/covid
import casosMain from "../models/casos.js"
import casos_2020 from "../models/casos.js"
import casos_2021 from "../models/casos.js"
import casos_2022 from "../models/casos.js"
import asyncHandler from 'express-async-handler'

const getData = asyncHandler(async (req, res) => {

    const data = await casosMain.find().limit(20)
    res.status(200).json(data)

})
const filterInfo = asyncHandler(async (req, res) => {
    
    const params = req.query
    const data = await casosMain.find(params).limit(10)
    res.status(200).json(data)
    console.log(params);
})
const initInfo = asyncHandler(async (req, res) => {
    const data = await casosMain.find(params).limit(10)
    res.status(200).json(data)

})
export { getData, filterInfo, initInfo }
// Fecha(oblig), Depart(Oblig si hay ciudad espec), Field(No oblig)
// Field:{Edad,Sexo,Vacunacion}