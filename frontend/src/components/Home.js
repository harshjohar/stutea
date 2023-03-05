import React from 'react'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

export const Home = (props) => {
    return (
        <>
        {!(localStorage.getItem('token')) && <LandingPage/>}
        {(localStorage.getItem('token')) && <Dashboard theme={props.theme} toggleTheme={props.toggleTheme} flag={props.flag}/>}
        </>
    )
}
export default Home