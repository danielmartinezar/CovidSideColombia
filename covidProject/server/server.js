import express from "express"
import dot_env from 'dotenv'
import connect_mongoDB from './config/db.js'
import covidRoute from './routes/router.js'

const app = express()
const dotenv = dot_env.config()
const port = 8080

//connect to server 
app.listen(port,()=>{
    console.log(`Connection created on Port ${port}`)
})

//connect to database
connect_mongoDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use('/covid',covidRoute)