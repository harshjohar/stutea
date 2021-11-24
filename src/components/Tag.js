import React from 'react'
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const {value} = props;
    return (
        <div>
            <Link to={`/query?tag=${value}`} className="tag-link badge bg-secondary">
                {value}
            </Link>
        </div>
    )
}
