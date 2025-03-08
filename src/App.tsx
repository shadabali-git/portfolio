import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router'
import Navbar from './components/Navbar';
const App: React.FC = () => {
    return (
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>} >
                  <Route index  element={<h2> Home </h2>}/>
                  <Route path="/about" element={<h2> About </h2>} />
                 </Route>
                 <Route path="*" element={<h2> Not Found </h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;