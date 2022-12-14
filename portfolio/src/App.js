import './App.css';
import Header from './Components/Header';
import MainDesign from './Components/MainDesign';
import MainDevelop from './Components/MainDevelop';
import Footer from './Components/Footer';
import DevelopWork from './Components/DevelopWork';
import ScrollToTop from './Components/ScrollToTop';
import Instagram from './Components/Instagram';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export const FilterContext = React.createContext(0);

function App() {

  return (
      <div id="app-div">

        <BrowserRouter basename="/portfolio">
          <Header />
          <ScrollToTop>
            <Routes>
                <Route path="/" element={<MainDesign />} />
                <Route path="/develop" element={<MainDevelop />} />
                <Route path="/develop/work" element={<DevelopWork />} />
                <Route path="/instagram" element={<Instagram />} />
              </Routes>
          </ScrollToTop>
            
          <Footer />
        </BrowserRouter>

      </div>
  );
}

export default App;
