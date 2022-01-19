import React from 'react';
import './StoryHeader.css'

type StoryHeaderProps = {
    title: string,
    subtitle: string
}

function StoryHeader({title, subtitle}: StoryHeaderProps) {
    return (
        <div className="story-header">
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