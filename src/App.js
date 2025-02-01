import './App.css';
import './Typography.css'
import './Color.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UIUX from './Components/UIUX/UIUX';
import Dev from './Components/Dev/Dev'
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Life from './Components/Life/Life';
import Contact from './Components/Contact/Contact';
import Instagram from './Components/Instagram/Instagram'
import ScrollToTop from './ScrollToTop';
import EasyMed from './Components/EasyMed/EasyMed';
import TencentMusic from './Components/TencentMusic/TencentMusic';
import GoogleAround from './Components/GoogleAround/GoogleAround';
import ShopXDev from './Components/ShopXDev/ShopX';
import MetaCertificate from './Components/MetaCertificate/MetaCertificate';
import ARamsay from './Components/ARamsay/ARamsay';
import InstagramDev from './Components/InstagramDev/Instagram';
import EasyMedDev from './Components/EasyMedDev/EasyMedDev';
import SuperPlant from './Components/Superplant/SuperPlant';
import FaceChanging from './Components/Face-changing/FaceChanging';
import InProgress from './Components/InProgress/InProgress';
import Albatross from './Components/Albatross/Albatross';
import ShopX from './Components/ShopX/ShopX';
import EventShowcaser from './Components/RealisticEventShowcaser/EventShowcaser';
import TikTok from './Components/TikTok/TikTok';
import PasswordProtectedRoute from './Components/Password/ProtectedPortfolio';


export default function App() {

    const root = document.documentElement;
    useEffect(() => {
      root.style.setProperty("--VW", `${window.innerWidth*0.01}px`);
      root.style.setProperty("--VH", `${window.innerHeight*0.01}px`);
    }, [root.style]);

    return (
      <div id="app-div">
        <PasswordProtectedRoute>
          <Router>
            <Header />
            <ScrollToTop>
              <Routes>
                  <Route path="/*" element={<Home />} />
                  <Route path="/uiux" element={<UIUX />} />
                  <Route path="/dev" element={<Dev />} />
                  <Route path="/life" element={<Life />} />
                  <Route path="/uiux/tiktok" element={<TikTok/>} />
                  <Route path="/uiux/instagram" element={<Instagram/>} />
                  <Route path='/uiux/easymed' element={<EasyMed/>}/>
                  <Route path='/uiux/albatross' element={<Albatross/>}/>
                  <Route path='/uiux/shopx' element={<ShopX/>}/>
                  <Route path='/uiux/homnihealth' element={<InProgress/>}/>
                  <Route path='/dev/tencentmusic' element={<TencentMusic/>}/>
                  <Route path='/dev/around' element={<GoogleAround/>}/>
                  <Route path='/dev/shopx' element={<ShopXDev/>}/>
                  <Route path='/dev/metacertificate' element={<MetaCertificate/>}/>
                  <Route path='/dev/aramsay' element={<ARamsay/>}/>
                  <Route path='/dev/instagram' element={<InstagramDev/>}/>
                  <Route path='/dev/easymed' element={<EasyMedDev/>}/>
                  <Route path='/dev/superplant' element={<SuperPlant/>}/>
                  <Route path='/dev/facechanging' element={<FaceChanging/>}/>
                  <Route path='/dev/realisticeventshowcaser' element={<EventShowcaser/>}/>
                </Routes>
            </ScrollToTop>
            <Contact />
          </Router>
        </PasswordProtectedRoute>
          

      </div>
  );
}
