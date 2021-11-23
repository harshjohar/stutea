import React, {useState} from 'react'

export const TagIcon = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="tags-opt">
            <div className="smol-tag-opt" onClick={()=>setOpen(!open)}>
                {props.icon}
            </div>
            {open && props.children}
        </div>
    )
}
