import React from 'react';
import './App.css';
import StoryHeader from "./components/story/StoryHeader";
import StoryLine from "./components/story/StoryLine";
import BgClouds from './assets/clouds.png';
import MgMountains from './assets/mountains.png';
import FgHill from './assets/hill-anna.png';

function App() {
    return (
        <div className="app">
            <img className="bg-clouds" src={BgClouds} alt={"clouds"}/>
            <img className="mg-mountains" src={MgMountains} alt={"mountains"}/>
            <img className="fg-hill" src={FgHill} alt={"hill"}/>
            <div className="gradient-top"/>
            <StoryHeader
                title={"Seid dabei auf unserem ersten großen Abenteuer"}
                subtitle={"30 Tage Portugal & Spanien"}
            />
            <StoryLine/>
        </div>
    );
}

export default App;
