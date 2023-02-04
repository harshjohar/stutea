import React from 'react'
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const {value} = props;
    return (
        <div>
            <a href={`/query?tag=${value}`} className="tag-link badge">
                {value}
            </a>
        </div>
    )
}
