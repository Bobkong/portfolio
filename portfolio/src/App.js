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
const About = loadable(() => import('./Components/About/About'));



export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app-div">

        <BrowserRouter basename="/portfolio">
          <Header />
          <ScrollToTop>
            <Routes>
                <Route path="/" element={<MainDesign />} />
                <Route path="/design" element={<MainDesign />} />
                <Route path="/develop" element={<MainDevelop />} />
                <Route path="/develop/work" element={<DevelopWork />} />
                <Route path="/instagram" element={<Instagram />} />
                <Route path='/about' element={<About />} />
              </Routes>
          </ScrollToTop>
            
          <Footer />
        </BrowserRouter>

      </div>
  );
  }
}
