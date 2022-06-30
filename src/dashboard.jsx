import { Button } from 'bootstrap'
import React from 'react'
import Header from './header'

export default function Dashboard() {
    return (
        <>
            <Header />
            <div className='row bg-app-primary'>
                <div className='w-50 col' >
                    <p class="fw-bold fs-2">Fast and secure Presidential Elections </p>
                    <p class="fw-normal fs-6">For sure you have made a right choice</p>
                    <button className="btn btn-primary w-25 h-50">JOIN NOW</button>
                </div>
                <div className='w-50 col'>
                    <img className='w-50 d-block mx-auto' src={'../assets/images/phone.png'} />
                </div>
            </div>
        </>
    )
}
