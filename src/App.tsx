import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router'
import HomeLayout from "./Design/HomeLayout.tsx";
import Hero from './components/Hero';
const App: React.FC = () => {
    return (
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>} >
                  <Route index  element={<Hero/>}/>
                  <Route path="/about" element={<h2> About </h2>} />
                 </Route>
                 <Route path="*" element={<h2> Not Found </h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;