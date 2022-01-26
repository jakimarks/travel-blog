import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Blog from "./containers/blog/Blog";
import Contact from "./containers/contact/Contact";
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
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/imprint" element={<Imprint/>}/>
                    <Route path="/data-privacy" element={<DataPrivacy/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
