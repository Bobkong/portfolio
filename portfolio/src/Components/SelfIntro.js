import './SelfIntro.css';
import React from 'react';
import selfImage from '../Assets/SelfIntro.png';

function SelfIntro() {
    return (
    <div id='self-intro-div'>
        <div id='self-image-div-out'>
            <div id='self-image-div-in'>
                <img src={selfImage} alt="self introduction image" id='self-intro-image'/>
            </div>
        </div>
        
        <div id='self-text'>
            <p id='intro-title'><span>Lingshuang is a</span> Product Designer <span>and</span> Creative Technologist<span>, with an enormous passion for </span>UI/UX, AR/VR, <span>and</span> Design Engineering.</p>
            <p className='intro-text'>Worked at <a target="_blank" href='https://www.instagram.com/'>Instagram</a> as a Designer and Prototyper intern this summer</p>
            <p className='intro-text'>Pursue Human-Computer Interaction master's degree at  <a target="_blank" href='https://designlab.ucsd.edu/'>UC San Diego</a></p>
            <p className='intro-text'>Worked at <a target="_blank" href='https://www.tencent.com/'>Tencent</a> as a Mobile App Engineer from 2019 to 2021</p>
        </div>
    </div>);
}

export default SelfIntro;