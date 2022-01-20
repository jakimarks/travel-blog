import React, {useEffect, useState} from 'react';
import './StoryHeader.css'

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
            <div className="subtitle">
                <div className="line"/>
                <span className="text">
                    {subtitle}
                </span>
            </div>
            <span className="title">
                {title}
            </span>
        </div>
    );
}

export default StoryHeader;