import React from 'react';
import './StoryEntry.css'

// TODO get rid of number completely and automatically calculate based on #entry
// TODO add image
type StoryEntryProps = {
    day: string,
    title: string,
    subtitle: string,
    description: string
}

function StoryEntry({day, title, subtitle, description}: StoryEntryProps) {
    return (
        <div className="story-entry">
            <div className="story-entry__content">
                <span className="story-entry__day">
                    {day}
                </span>
                <div className="story-entry__subtitle">
                    <div className="subtitle__line"/>
                    <span className="subtitle__text">
                        {subtitle}
                    </span>
                </div>
                <span className="story-entry__title">
                    {title}
                </span>
                <span className="story-entry__description">
                    {description}
                </span>
                <span className="story-entry__link">
                    mehr lesen
                </span>
            </div>
            <img className="story-entry__image" alt="Snapshot of the day"/>
        </div>
    );
}

export default StoryEntry;
