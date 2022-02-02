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
                        <Route path={process.env.PUBLIC_URL + '/'} element={<Home/>}/>
                        <Route path={process.env.PUBLIC_URL + '/about'} element={<About/>}/>
                        <Route path={process.env.PUBLIC_URL + '/blog'} element={<Blog/>}/>
                        <Route path={process.env.PUBLIC_URL + '/imprint'} element={<Imprint/>}/>
                        <Route path={process.env.PUBLIC_URL + '/data-privacy'} element={<DataPrivacy/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
