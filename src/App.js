import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UIUX from './Components/UIUX/UIUX';
// import Dev from './Components/Dev/Dev'
import Instagram from './Components/Instagram/Instagram'

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import loadable from '@loadable/component';

const ScrollToTop = loadable(() => import('./Components/Work/ScrollToTop'));
const Footer = loadable(() => import('./Components/Footer/Footer'));



export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app-div">

        <BrowserRouter basename="/">
          <Header />
          <ScrollToTop>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uiux" element={<UIUX />} />
                {/* <Route path="/dev" element={<Dev />} /> */}
                {/* <Route path="uiux/instagram" element={<Instagram />} /> */}
                {/* <Route path="/uiux" element={<MainDesign />} />
                <Route path="/mobileweb" element={<MainDevelop />} />
                <Route path="/arvr" element={<MainDesign />} />
                <Route path="/other" element={<MainDesign />} />
                 */}
              </Routes>
          </ScrollToTop>
            
          <Footer />
        </BrowserRouter>

      </div>
  );
  }
}
