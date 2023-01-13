import React, {useState} from 'react'

export const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="nav-item-top">
        <div className="icon-button" onClick={()=> setOpen(!open)}>
            {props.icon}
        </div>
        {open && props.children}
        </div>
    )
}
