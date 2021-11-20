import React from 'react'
import { CreditUser } from './CreditUser'
import "../css/Dashboard.css"
import { Notifications } from './Notifications'

export const SidePane = () => {
    return (
        <div className="sidepane">
            <CreditUser/>
            <Notifications/>
        </div>
    )
}
