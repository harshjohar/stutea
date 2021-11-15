import React, {useState, useEffect} from 'react'
import { Tag } from './Tag';

export const Tags = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [tags, setTags] = useState([]);
    // api call for tag
    const getTags = async() => {
        const response = await fetch(`${host}/api/questions/alltags`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await response.json();
        setTags(json);
    }
    useEffect(() => {
        getTags();
        console.log(tags);
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            all tags here
            {tags.map((tag)=> {
                return <Tag key={tag} value={tag}/>
            })}
        </div>
    )
}
