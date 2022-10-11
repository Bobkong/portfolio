import './SelfIntro.css';
import React from 'react';
import selfImage from '../Assets/selfIntro.gif';
import paint from '../Assets/paint.png';
import school from '../Assets/school.png';
import coding from '../Assets/coding.png';


function SelfIntro() {
    return (
    <div id='self-intro-div'>
        <div id='self-image-div-out'>
            <div id='self-image-div-in'>
                <img src={selfImage} alt="self introduction image" id='self-intro-image'/>
            </div>
        </div>
        
        <div id='self-text'>
            <p id='intro-title'><span>Lingshuang is a designer and prototyper who has 7 years of software development experience, with an enormous passion for </span>UI/UX, AR/VR, <span>and</span> Design Engineering.</p>
            <div className='past-experience-div'>
                <img src={paint} alt="design" className='past-experience-img'/>
                <p className='intro-text'>Innovated at <a target="_blank" href='https://www.instagram.com/'>Instagram</a> as a Designer and Prototyper intern this summer</p>
            </div>
            <div className='past-experience-div'>
                 <img src={coding} alt="coding" className='past-experience-img'/>
                <p className='intro-text'>Worked at <a target="_blank" href='https://www.tencent.com/'>Tencent</a> as a Mobile App Engineer from 2019 to 2021</p>
            </div>
            <div className='past-experience-div'>
                <img src={school} alt="university" className='past-experience-img'/>
                <p className='intro-text'>Pursue Human-Computer Interaction master's degree at  <a target="_blank" href='https://designlab.ucsd.edu/'>UC San Diego</a></p>
            </div>
        </div>
    </div>);
}

export default SelfIntro;