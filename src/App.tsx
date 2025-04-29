import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router'
import HomeLayout from "./Design/HomeLayout.tsx";
import Hero from './components/Hero';
import AboutMe from "./components/AboutMe.tsx";
import Work from "./components/Work.tsx";
import Contact from "./components/Contact.tsx";
import Bubble from "./Design/bubble.tsx";
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route index element={<Hero/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/radial" element={<Bubble/>}/>
                </Route>
                <Route path="*" element={<h2> Not Found </h2>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;