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
import ScrollToTop from './ScrollToTop';
import EasyMed from './Components/EasyMed/EasyMed';
import TencentMusic from './Components/TencentMusic/TencentMusic';
import GoogleAround from './Components/GoogleAround/GoogleAround';
import ShopX from './Components/ShopX/ShopX';
import MetaCertificate from './Components/MetaCertificate/MetaCertificate';
import ARamsay from './Components/ARamsay/ARamsay';
import InstagramDev from './Components/InstagramDev/Instagram';
import EasyMedDev from './Components/EasyMedDev/EasyMedDev';
import SuperPlant from './Components/Superplant/SuperPlant';
import FaceChanging from './Components/Face-changing/FaceChanging';
import InProgress from './Components/InProgress/InProgress';


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
                  <Route path='/uiux/easymed' element={<EasyMed/>}/>
                  <Route path='/uiux/around' element={<InProgress/>}/>
                  <Route path='/uiux/blueraven' element={<InProgress/>}/>
                  <Route path='/uiux/homnihealth' element={<InProgress/>}/>
                  <Route path='/dev/tencentmusic' element={<TencentMusic/>}/>
                  <Route path='/dev/around' element={<GoogleAround/>}/>
                  <Route path='/dev/shopx' element={<ShopX/>}/>
                  <Route path='/dev/metacertificate' element={<MetaCertificate/>}/>
                  <Route path='/dev/aramsay' element={<ARamsay/>}/>
                  <Route path='/dev/instagram' element={<InstagramDev/>}/>
                  <Route path='/dev/easymed' element={<EasyMedDev/>}/>
                  <Route path='/dev/superplant' element={<SuperPlant/>}/>
                  <Route path='/dev/facechanging' element={<FaceChanging/>}/>
                </Routes>
            </ScrollToTop>
            <Contact />
            {/* <Footer /> */}
          </BrowserRouter>
       

      </div>
  );
}
