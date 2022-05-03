import { React,useState} from 'react'
import Sidebar from './Sidebar'
import './styles/dashboard.css'
import Graphside from './Graphside.jsx'
export default function Dashboard() {
    const [sideBarData, setsideBarData] = useState({})

    // receive filtering data from SideBar child-component
    const sideBarFiltered = (data)=>{
        setsideBarData(data)
    }
    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-2 border p-0 ' id='sideBar'>
                            <Sidebar sideBarFiltered = {sideBarFiltered} className />
                        </div>
                        <div className='col-10 border '><Graphside sideBarData={sideBarData}/></div>

                    </div>
                </div>
            </section>
        </div>
    )
}
