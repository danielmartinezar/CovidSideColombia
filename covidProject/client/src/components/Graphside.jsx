import React from 'react'
import { Pie } from 'react-chartjs-2'
import Generalchart from './Generalchart.jsx'
import Piechart from './Piechart.jsx'
import './styles/Graphside.css'
export default function Graphside() {
    return (
        <div>
            <div className='container-fluid mt-5 '>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-10 '>
                                <Generalchart />
                            </div>
                            <div className='col-2 border m-0' >
                                <h5><strong>Contagiados:</strong> {41}</h5>
                                <h5><strong>Fallecidos:</strong> {20}</h5>
                                <h5><strong>Recuperados:</strong> {41 - 20}</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-4 order'>
                        <div className='card'>
                            <div className='card-body'>
                                <Piechart/>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='card'>
                            <div className='card-body'>
                                no se
                            </div>
                        </div></div>
                    <div className='col-4'><div className='card' id='thirdChart'>
                        <div className='card-body'>
                            <Generalchart/>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}
