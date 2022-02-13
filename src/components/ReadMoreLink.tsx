import React from 'react';
import 'moment/locale/de';
import './DateDisplay.css'
import {MdEast} from "react-icons/md";
import {Link} from "react-router-dom";
import './ReadMoreLink.css'

type ReadMoreLinkProps = {
    to: string
}

function ReadMoreLink({to}: ReadMoreLinkProps) {
    return (
        <Link className="read-more-link" to={to}>
            mehr lesen
            <MdEast size={20}/>
        </Link>
    );
}

export default ReadMoreLink;
