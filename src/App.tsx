import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Story from "./components/story/Story";
import Logo from "./components/branding/Logo";

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Abhaya Libre', 'Amiko', 'Amatic SC']
            }
        });
    }, []);

    return (
        <div className="app">
            <Logo/>
            <Story/>
        </div>
    );
}

export default App;
