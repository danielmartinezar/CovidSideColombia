import './App.css';
import { useState, useEffect, useRef, Fragment } from 'react'
import axios from 'axios';
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard';
const URL = 'http://localhost:8080/covid/filter'

function App(data) {

  const [listOfData, setListOfData] = useState([])
  const filterRef = useRef('')
  async function requestFilter() {
    const keyFilter = filterRef.current.value
    await axios.get(URL + '/' + keyFilter).then((response) => {
      console.log(response.data)
      setListOfData(response.data)
    })
  }
  return (
    <div className='App'>
    <Fragment>
      <Dashboard/>
    </Fragment>
    </div>
  )
}

export default App;
