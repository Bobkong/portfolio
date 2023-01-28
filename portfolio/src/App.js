import './App.css';
import Header from './Components/Header';
import MainDesign from './Components/Work/MainDesign';
import MainDevelop from './Components/Work/MainDevelop';
import Footer from './Components/Footer';
import DevelopWork from './Components/Work/DevelopWork';
import ScrollToTop from './Components/Work/ScrollToTop';
import Instagram from './Components/Instagram/Instagram';
import About from './Components/About/About';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

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
