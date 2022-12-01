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
            <div className='past-experience-div' id='first-past-experience'>
                <img src={school} alt="university" className='past-experience-img'/>
                <p className='intro-text'>UI/UX Designer at <a target="_blank" href='https://hxi.ucsd.edu/project/ubistroke/'>Homni Health</a>, Feb 2022 ~ Now</p>
            </div>
            <div className='past-experience-div' >
                <img src={paint} alt="design" className='past-experience-img'/>
                <p className='intro-text'>AR Designer at <a target="_blank" href='https://www.instagram.com/'>Instagram</a>, Summer 2022</p>
            </div>
            <div className='past-experience-div'>
                 <img src={coding} alt="coding" className='past-experience-img'/>
                <p className='intro-text'>Software Engineer at <a target="_blank" href='https://www.tencent.com/'>Tencent</a>, 2019 ~ 2021</p>
            </div>
        </div>
    </div>);
}

export default SelfIntro;