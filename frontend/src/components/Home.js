import React from 'react'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

export const Home = (props) => {
    return (
        <>
        {!(localStorage.getItem('token')) && <LandingPage/>}
        {(localStorage.getItem('token')) && <Dashboard flag={props.flag}/>}
        </>
    )
}
export default Home