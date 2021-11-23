import React from 'react'
import { Link } from 'react-router-dom';

export const DropdownItem = (props) => {
    const {value} = props;
    return (
        <div className="tag-item-drop">
            <Link to={`/query?tag=${value}`} className="tag-link-drop">
                {value}
            </Link>
        </div>
    )
}
