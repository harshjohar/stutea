import React from 'react'
import { DashBoardNavbar } from "./DashBoardNavbar";
import { Navbar } from "./Navbar";
export const Nav = () => {
    return (
        <>
            {localStorage.getItem('token')&&<DashBoardNavbar/>}
            {/* <Navbar/> */}
        </>
    )
}
