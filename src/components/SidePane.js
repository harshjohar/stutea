import React from 'react'
import { CreditUser } from './CreditUser'
import "../css/Dashboard.css"

export const SidePane = () => {
    return (
        <div className="sidepane">
            {/* <h2>SidePane</h2> */}
            <CreditUser/>
        </div>
    )
}
