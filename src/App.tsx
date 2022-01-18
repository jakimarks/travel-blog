import React from 'react';
import './App.css';
import StoryHeader from "./components/story/StoryHeader";
import StoryLine from "./components/story/StoryLine";

function App() {
    return (
        <div className="App">
            <StoryHeader
                title={"Seid dabei auf unserem ersten großen Abenteuer"}
                subtitle={"30 Tage Portugal & Spanien"}
            />
            <StoryLine/>
        </div>
    );
}

export default App;
