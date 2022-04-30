//@desc Get data from mongodb
//@route /api/covid
import casosMain from "../models/casos.js"
import casos_2020 from "../models/casos.js"
import casos_2021 from "../models/casos.js"
import casos_2022 from "../models/casos.js"
import asyncHandler from 'express-async-handler'

const getData = asyncHandler(async (req,res) =>{
    
    const data = await casosMain.find().limit(20)
    res.status(200).json(data)
    
})
const filterInfo = asyncHandler(async(req,res)=>{
    // const year= req.query.year
    // const month = req.query.month
    // const departament = req.query.departament
    // const city = req.query.city
    // const filterBy=req.query.filterBy
    // const value = req.query.value
    // const edad = req.query.edad
    const params = req.query
    const data = await casosMain.find(params).limit(10000)
    res.status(200).json(data)
    console.log(params);
    
})
export {getData, filterInfo}
// Fecha(oblig), Depart(Oblig si hay ciudad espec), Field(No oblig)
// Field:{Edad,Sexo,Vacunacion}