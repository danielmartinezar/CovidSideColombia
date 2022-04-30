import React from 'react'

export default function Graphside() {
    return (
        <div>
            <div className='container-fluid mt-5 '>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-10 border'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum reiciendis laborum dolores obcaecati architecto fugit perspiciatis error nesciunt exercitationem quos, vero cumque accusamus dignissimos molestiae ipsum! Corrupti culpa minima corporis!
                            </div>
                            <div className='col-2 border ' >
                                <h5><strong>Contagiados:</strong> {41}</h5>
                                <h5><strong>Fallecidos:</strong> {20}</h5>
                                <h5><strong>Recuperados:</strong> {41-20}</h5>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
