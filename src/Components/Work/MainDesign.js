import './MainDesign.css';
import Filter from './Filter';
import DesignList from './DesignList';
import Hero from "../Home/Hero/Hero";


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