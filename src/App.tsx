import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Blog from "./containers/blog/Blog";

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
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
