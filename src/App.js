import './App.css';
import Header from './Components/Header';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import loadable from '@loadable/component';

const MainDesign = loadable(() => import('./Components/Work/MainDesign'));
const MainDevelop = loadable(() => import('./Components/Work/MainDevelop'));
const ScrollToTop = loadable(() => import('./Components/Work/ScrollToTop'));
const Footer = loadable(() => import('./Components/Footer'));
const DevelopWork = loadable(() => import('./Components/Work/DevelopWork'));
const Instagram = loadable(() => import('./Components/Instagram/Instagram'));
const Home = loadable(() => import('./Components/Home/Home'));



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
