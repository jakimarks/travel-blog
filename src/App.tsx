import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Blog from "./containers/blog/Blog";
import Imprint from "./containers/imprint/Imprint";
import DataPrivacy from "./containers/data-privacy/DataPrivacy";

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Abhaya Libre', 'Amiko', 'Amatic SC']
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <div className="main-content">
                    <Routes>
                        <Route path="/travel-blog" element={<Home/>}/>
                        <Route path="/travel-blog/about" element={<About/>}/>
                        <Route path="/travel-blog/blog" element={<Blog/>}/>
                        <Route path="/travel-blog/imprint" element={<Imprint/>}/>
                        <Route path="/travel-blog/data-privacy" element={<DataPrivacy/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
