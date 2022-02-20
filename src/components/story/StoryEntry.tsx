import React from 'react';
import './StoryEntry.css'
import ReadMoreLink from "../ReadMoreLink";

// TODO add image
export type StoryEntryProps = {
    day: number,
    title: string,
    subtitle: string,
    description: string,
    slug?: string,
    image?: string
}

const zeroFill = (number: number, width: number): string => {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number + '') ? 2 : 1)).join('0') + number;
    }
    return number + "";
}

const getOrientation = (day: number): ("left" | "right") => {
    if (day % 2 !== 0) return "left"
    else return "right"
}

function StoryEntry({day, title, subtitle, description, slug, image}: StoryEntryProps) {
    const content = (
        <div className="story-entry__content">
            <span className="story-entry__day">
                {zeroFill(day, 2)}
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
            <p className="story-entry__description">
                {description}
            </p>
            {slug ? <ReadMoreLink to={`/blog/${slug}`}/> : null}
        </div>
    )

    const className = getOrientation(day) === "left" ? "story-entry story-entry--left" : "story-entry story-entry--right"

    const images = require.context('../../assets/blog', true);
    const img = image ? images(`./${image}`) : undefined;

    return (
        <div className={className}>
            {[
                content,
                img ? <img className="story-entry__image" alt="Snapshot of the day" src={img}/> : undefined
            ]}
        </div>
    );
}

export default StoryEntry;
