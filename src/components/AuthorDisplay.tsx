import React from 'react';
import {BsPen} from "react-icons/bs";
import './AuthorDisplay.css'

type AuthorDisplayProps = {
    author: string
}

function AuthorDisplay({author}: AuthorDisplayProps) {
    return (
        <span className="author-display">
            <BsPen size={20}/>
            <p>{author}</p>
        </span>
    )
}

export default AuthorDisplay
