import React, {useEffect, useState} from 'react';
import './StoryHeader.css'
import {MdSouth} from "react-icons/md";

type StoryHeaderProps = {
    title: string,
    subtitle: string
}

function StoryHeader({title, subtitle}: StoryHeaderProps) {

    const [headerOpacity, setHeaderOpacity] = useState(1)

    const listenScrollEvent = () => {
        const relativeScrollY = window.scrollY / window.visualViewport.height
        const opacity: number = 1 - (relativeScrollY * 1.5)
        setHeaderOpacity(opacity)
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <div className="story-header" style={{opacity: headerOpacity}}>
            <div className="story-header__subtitle">
                <div className="story-header__line"/>
                <span className="story-header__subtitle__text">
                    {subtitle}
                </span>
            </div>
            <span className="story-header__title">
                {title}
            </span>
            <a href={"#story-line"} className="story-header__link">
                <span>hier lang</span>
                <MdSouth size={24} className="story-header__link__arrow"/>
            </a>
        </div>
    );
}

export default StoryHeader;
