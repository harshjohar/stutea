import React from 'react'
import { Link } from 'react-router-dom';

export const DropdownItem = (props) => {
    const {value, disabled} = props;
    return (
        <div className="tag-item-drop">
            {!disabled ? <a href={`/query?tag=${value}`} className="tag-link-drop">
                {value}
            </a>:<div className='tag-link-drop'>{value}</div>}
        </div>
    )
}
