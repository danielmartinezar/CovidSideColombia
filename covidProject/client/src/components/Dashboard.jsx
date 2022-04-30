import { React, Fragment } from 'react'
import Sidebar from './Sidebar'
import './styles/dashboard.css'
import Graphside from './Graphside'
export default function Dashboard() {
    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-2 border p-0 ' id='sideBar'>
                            <Sidebar className />
                        </div>
                        <div className='col-10 border '><Graphside/></div>

                    </div>
                </div>
            </section>
        </div>
    )
}
