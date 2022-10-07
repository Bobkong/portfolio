import './MainDesign.css';
import SelfIntro from './SelfIntro';
import Filter from './Filter';
import DesignList from './DesignList';

function MainDesign() {
    return (
        <div id="main-div">
            <SelfIntro />
            <Filter tag="0"/>
            <DesignList />
        </div>
    );
}

export default MainDesign;