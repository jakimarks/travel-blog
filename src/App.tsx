import React, {useEffect} from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/home/Home";
import AboutView from "./containers/about/AboutView";
import BlogView from "./containers/blog/BlogView";
import Imprint from "./containers/imprint/Imprint";
import DataPrivacy from "./containers/data-privacy/DataPrivacy";
import BlogPostView from "./containers/blog/BlogPostView";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Abhaya Libre', 'Amiko', 'Amatic SC']
            }
        });
    }, []);

    return (
        <BrowserRouter basename="/travel-blog">
            <div className="app">
                <Header/>
                <div className="main-content">
                    <ScrollToTop>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<AboutView/>}/>
                            <Route path='/blog/:slug' element={<BlogPostView/>}/>
                            <Route path='/blog' element={<BlogView/>}/>
                            <Route path='/imprint' element={<Imprint/>}/>
                            <Route path='/data-privacy' element={<DataPrivacy/>}/>
                        </Routes>
                    </ScrollToTop>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
