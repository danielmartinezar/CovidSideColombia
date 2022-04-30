import mongoose from 'mongoose'
const caso = mongoose.Schema({
    _id:{
        type:Number
    },
    'Nombre departamento':{
        type: String
    },
    'Nombre municipio':{
        type:String
    },
    Edad: {
        type:Number
    },
    Sexo:{
        type:String
    },
    'Tipo de contagio':{
        type:String
    },
    
    'Ubicación del caso':{
        type:String
    },
    Estado:{
        type:String
    },
    Recuperado:{
        type:String
    },
    'Fecha de inicio de síntomas':{
        tpye:Date
    },
    
    'Fecha de diagnóstico':{
        type:Date
    },
    'Fecha de recuperación':{
        type:Date
    },
    'Tipo de recuperación':{
        tpye:String
    }
    


})
export default mongoose.model('caso',caso)