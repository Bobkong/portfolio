import './App.css';
import Header from './Components/Header';
import MainDesign from './Components/MainDesign';
import MainDevelop from './Components/MainDevelop';
import Footer from './Components/Footer';
import DevelopWork from './Components/DevelopWork';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const FilterContext = React.createContext(0);

function App() {
  const [tag, setTag] = React.useState(0);
  return (
    <FilterContext.Provider value={[tag, setTag]}>
      <div id="app-div">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/portfolio" element={<MainDesign />} />
            <Route path="/portfolio/develop" element={<MainDevelop />} />
            <Route path="/porfolio/develop/work" element={<DevelopWork />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
