import './MainDevelop.css';
import SelfIntro from './SelfIntro';
import Filter from './Filter';
import DevelopList from './DevelopList';


function MainDevelop() {
    
    return (
        <div id="main-div">
            <SelfIntro />
            <Filter />
            <DevelopList />
        </div>
);
}

export default MainDevelop;