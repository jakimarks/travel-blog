import StoryHeader from "../../components/story/StoryHeader";
import React from "react";
import BgClouds from '../../assets/clouds.png';
import MgMountains from '../../assets/mountains.png';
import FgHill from '../../assets/hill-anna.png';
import './Story.css';
import StoryLine from "../../components/story/StoryLine";

function Story() {
    return (
        <div className="story">
            <div className="story__background">
                <img className="story__bg-clouds" src={BgClouds} alt={"clouds"}/>
                <img className="story__mg-mountains" src={MgMountains} alt={"mountains"}/>
                <img className="story__fg-hill" src={FgHill} alt={"hill"}/>
                <div className="story__gradient-top"/>
            </div>
            <StoryHeader
                title={"Seid dabei auf unserem ersten großen Abenteuer"}
                subtitle={"30 Tage Portugal & Spanien"}
            />
            <StoryLine/>
        </div>
    )
}

export default Story
