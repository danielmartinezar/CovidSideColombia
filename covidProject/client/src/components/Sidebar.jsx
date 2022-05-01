import React, { useState,useEffect } from 'react'
import './styles/Sidebar.css'



export default function Sidebar() {
    const [yearState, setYearState] = useState('')
    const [monthState, setMonthState] = useState('')
    const [departmentState, setDepartmentState] = useState('')
    const [cityState, setCityState] = useState('')
    const [fieldState, setFieldState] = useState('')
    return (
        <div >
            <h4 className='m-3'><i>CovidSite Colombia</i></h4>
            {/* <hr/> */}
            <h5 className='m-3 mt-4'>Filtar Por:</h5>
            <div className="accordion" id="accordionPanelsStayOpenExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Fecha
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-6">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={
                                            (e) => {
                                                const selectedYear = e.target.value;
                                                setYearState(selectedYear)
                                            }}>
                                            <option selected>Año</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                            onChange={(e) => {
                                                const selectedMonth = e.target.value;
                                                setMonthState(selectedMonth)
                                            }}>
                                            <option selected>Mes</option>
                                            <option value="1">Enero</option>
                                            <option value="2">Febrero</option>
                                            <option value="3">Marzo</option>
                                            <option value="4">Abril</option>
                                            <option value="5">Mayo</option>
                                            <option value="6">Junio</option>
                                            <option value="7">Julio</option>
                                            <option value="8">Agosto</option>
                                            <option value="9">Septiembre</option>
                                            <option value="10">Octubre</option>
                                            <option value="11">Noviembre</option>
                                            <option value="12">Diciembre</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Ubicación
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-12">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                            onChange={(e) => {
                                                const selectedDepart = e.target.value;
                                                setDepartmentState(selectedDepart)
                                            }}>
                                            <option selected>Departamento</option>
                                            <option value="1">2020</option>
                                            <option value="2">2021</option>
                                            <option value="3">2022</option>
                                        </select>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option selected>Ciudad</option>
                                                <option value="1">2020</option>
                                                <option value="2">2021</option>
                                                <option value="3">2022</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Campo
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-12">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                            onChange={(e) => { const selectedField = e.target.value 
                                            setFieldState(selectedField)}}>
                                            <option selected>Campo</option>
                                            <option value="1">Sexo</option>
                                            <option value="2">Edad</option>
                                            <option value="3">Estado</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12">
                                        <input className='input' id='inputCampo' placeholder='Ingresa campo'></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary m-2 float-end'>Filtrar</button>
        </div>
    )
}
