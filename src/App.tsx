import React, {useEffect, useState} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Story from "./containers/story/Story";
import Logo from "./components/branding/Logo";
import NavBar from "./components/navbar/NavBar";

function App() {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Abhaya Libre', 'Amiko', 'Amatic SC']
            }
        });
    }, []);


    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    const responsive = {
        expandNavBar: width > 700
    }

    return (
        <div className="app">
            <div className="header">
                <Logo/>
                <NavBar expand={responsive.expandNavBar}/>
            </div>
            <Story/>
        </div>
    );
}

export default App;
