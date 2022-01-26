import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Story from "./components/story/Story";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";

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
            <Header/>
            <Story/>
            <Footer/>
        </div>
    );
}

export default App;
