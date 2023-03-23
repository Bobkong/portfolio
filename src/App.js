import './App.css';
import './Typography.css'
import './Color.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UIUX from './Components/UIUX/UIUX';
import Dev from './Components/Dev/Dev'
import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import loadable from '@loadable/component';
import Life from './Components/Life/Life';
import Contact from './Components/Contact/Contact';
import Instagram from './Components/Instagram/Instagram'

const ScrollToTop = loadable(() => import('./ScrollToTop'));

export default function App() {

    const root = document.documentElement;
    useEffect(() => {
      root.style.setProperty("--VW", `${window.innerWidth*0.01}px`);
      root.style.setProperty("--VH", `${window.innerHeight*0.01}px`);
    }, [root.style]);

    return (
      <div id="app-div">

          <BrowserRouter basename="/">
            <Header />
            <ScrollToTop>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/uiux" element={<UIUX />} />
                  <Route path="/dev" element={<Dev />} />
                  <Route path="/life" element={<Life />} />
                  <Route path="/uiux/instagram" element={<Instagram/>} />
                  {/* <Route path="/uiux" element={<MainDesign />} />
                  <Route path="/mobileweb" element={<MainDevelop />} />
                  <Route path="/arvr" element={<MainDesign />} />
                  <Route path="/other" element={<MainDesign />} />
                  */}
                </Routes>
            </ScrollToTop>
            <Contact />
            {/* <Footer /> */}
          </BrowserRouter>
       

      </div>
  );
}
