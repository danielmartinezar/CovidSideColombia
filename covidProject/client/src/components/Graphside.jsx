import { useEffect, React, useState, useRef } from 'react'
import axios from 'axios'
import Generalchart from './Generalchart.jsx'
import Piechart from './Piechart.jsx'
import './styles/Graphside.css'
const URL = 'http://localhost:8080/covid/filter'

const m = [10, 20, 30, 60, 80, 440]
export default function Graphside(sideBarData) {
    const [dataState, setDataState] = useState({})
    const [dataReceived, setDataReceived] = useState(null)
    const dataAge1 = []
    const dataGender1 = []
    const [dataAge, setDataAge] = useState([])
    const [dataGender, setDataGender] = useState([])
    // const[dataRecovered,setRecoveredSta] = useState([])

    const ref1 = useRef(false)
    const ref2 = useRef(false)
    const ref3 = useRef(false)
    async function requestFilter() {
        //request to the api
        await axios.get(URL, { params: dataState.sideBarData }).then((response) => {
            console.log(response.data);
            setDataReceived(response.data)
        })

    }
    function getObject() {
        for (let index = 0; index < Object.keys(dataReceived).length; index++) {
            dataAge1.push(dataReceived[index].Edad)
            dataGender1.push(dataReceived[index].Sexo)
            setDataAge(dataAge1)
            setDataGender(dataGender1)
            

        }

    }
    //useEffect is used to check if sideBarData has changed its value
    useEffect(() => {
        setDataState(sideBarData)
        //initial query if it is the first render
        if (!ref1.current) {
            ref1.current = true
            requestFilter()

        }


    }, [sideBarData])
    //render if it isn't the first one
    useEffect(() => {
        if (!ref2.current) {
            ref2.current = true
            return
        }
        //request with filter params
        requestFilter()
    }, [dataState])
    useEffect(() => {
        if (!ref3.current) {
            ref3.current = true
            return
        }
        getObject()
    }, [dataReceived])
    return (
        <div>
            <div className='container-fluid mt-5 '>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-10 '>
                                <Generalchart data={dataAge} />
                            </div>
                            <div className='col-2 border m-0' >
                                <h5><strong>Contagiados:</strong> {41}</h5>
                                <h5><strong>Fallecidos:</strong> {20}</h5>
                                <h5><strong>Recuperados:</strong> {41 - 20}</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-5 '>
                    <div className='col-4 order'>
                        <div className='card' id='secondChart'>
                            <div className='card-body'>
                                <Piechart data={dataGender} />
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='card'>
                            <div className='card-body'>
                                no se
                            </div>
                        </div></div>
                    <div className='col-4 '><div className='card ' id='thirdChart'>
                        <div className='card-body mt-5'>
                            <Generalchart data={dataAge} />
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}
