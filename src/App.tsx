import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Story from "./components/story/Story";

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Abhaya Libre', 'Amiko']
            }
        });
    }, []);

    return (
        <div className="app">
            <Story/>
        </div>
    );
}

export default App;
