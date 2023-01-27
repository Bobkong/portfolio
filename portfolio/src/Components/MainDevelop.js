import './MainDevelop.css';
import Hero from "./Hero/Hero";
import Filter from './Filter';
import DevelopList from './DevelopList';


function MainDevelop() {
    
    return (
        <div id="main-div">
            <Hero />
            <Filter tag="1"/>
            <DevelopList />
        </div>
);
}

export default MainDevelop;