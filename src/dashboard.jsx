import React from 'react'
import Candidate from './components/candidate'
import Header from './components/header'

export default function Dashboard() {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='row m-lg-4 '>
                <div className='col-lg-6 col-md-12 col-sm-12' >
                    <p class="fw-bold fs-2">Fast and secure Presidential Elections </p>
                    <p class="fw-normal fs-6">For sure you have made a right choice</p>
                    <button className="btn w-50 bg-text-color h-24 bg-app-primary">JOIN NOW</button>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img className='w-50 d-block mx-auto' src={'../assets/images/phone.png'} />
                </div>
            </div>
            <div className='d-block mx-auto bg-primary'>
                <p className='fw-bold fs-4'>All candidates</p>
            </div>
            <div className='row'>
                <Candidate></Candidate>
            </div>
        </div>
    )
}
