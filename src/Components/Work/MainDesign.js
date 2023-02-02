import './MainDesign.css';
import SelfIntro from './SelfIntro';
import Filter from './Filter';
import DesignList from './DesignList';
import Hero from "./Hero/Hero";


function MainDesign() {
    return (
        <div id="main-div">
            <Hero />
            <Filter tag="0"/>
            <DesignList />
        </div>
    );
}

export default MainDesign;