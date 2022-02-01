import './StoryLine.css'
import StoryEntry, {StoryEntryProps} from "./StoryEntry";
import React from "react";
import storyEntries from '../../data/story/story-entries.json'

function StoryLine() {
    const entries: Array<StoryEntryProps> = storyEntries.entries

    const children = entries.map((entry) => {
        return (
            <StoryEntry
                day={entry.day}
                title={entry.title}
                subtitle={entry.subtitle}
                description={entry.description}
            />
        )
    });

    return (
        <div id="story-line" className="story-line">
            {children}
        </div>
    );
}

export default StoryLine;
