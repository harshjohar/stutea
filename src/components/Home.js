import React from 'react'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

export const Home = () => {
    return (
        <>
        {/* {!(localStorage.getItem('token')) && <LandingPage/>} */}
        {(localStorage.getItem('token')) && <Dashboard/>}
        </>
    )
}
export default Home