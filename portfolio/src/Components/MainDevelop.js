import './MainDevelop.css';
import SelfIntro from './SelfIntro';
import Filter from './Filter';
import DevelopList from './DevelopList';


function MainDevelop() {
    
    return (
        <div id="main-div">
            <SelfIntro />
            <Filter tag="1"/>
            <DevelopList />
        </div>
);
}

export default MainDevelop;