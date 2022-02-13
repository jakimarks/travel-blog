import React from 'react';
import moment from 'moment'
import 'moment/locale/de';
import {AiOutlineCalendar} from 'react-icons/ai';
import './DateDisplay.css'

type DateDisplayProps = {
    timestamp: string
}

function DateDisplay({timestamp}: DateDisplayProps) {
    const date = moment(new Date(timestamp)).locale("de")

    return (
        <span className="date-display">
            <AiOutlineCalendar size={20}/>
            <p>{date.format("DD.MMMM YYYY")}</p>
        </span>
    );
}

export default DateDisplay;
