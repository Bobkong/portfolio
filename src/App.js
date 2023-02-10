import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Dev from './Components/Dev/Dev'

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import loadable from '@loadable/component';

//const UIUX = loadable(() => import('./Components/UIUX/UIUX'));
//const Dev = loadable(() => import('./Components/Dev/Dev'));
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
                {/* <Route path="/uiux" element={<UIUX />} /> */}
                <Route path="/dev" element={<Dev />} />
                {/* <Route path="/uiux" element={<MainDesign />} />
                <Route path="/mobileweb" element={<MainDevelop />} />
                <Route path="/arvr" element={<MainDesign />} />
                <Route path="/other" element={<MainDesign />} />
                <Route path="/instagram" element={<Instagram />} /> */}
              </Routes>
          </ScrollToTop>
            
          <Footer />
        </BrowserRouter>

      </div>
  );
  }
}
