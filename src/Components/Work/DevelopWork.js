import './DevelopWork.css';
import { useLocation } from "react-router-dom";
import React from 'react';
import ReactPlayer from 'react-player';
import QQMusicFeedback from '../../Assets/qqmusic-feedback.png';
import QQMusicTeam1 from '../../Assets/qqmusic-team-1.jpeg';
import QQMusicTeam2 from '../../Assets/qqmusic-team-2.JPG';
import Certificate from '../../Assets/certificate.png';


const development = [
    // Tencent
    {projectName: "Tencent Music", 
    video: 'https://youtu.be/PfwT_1XfYis', 
    language: "Android: Java, Kotlin, XML, JSON", 
    type: "Full-time Job", 
    about: "QQ Music was established in 2005. It focuses on providing more than 800 million users with the latest, hottest, and most comprehensive music content. With consistent innovation, it has initiated a variety of entertaining services that enable users to enjoy a trendy music entertainment experience integrating \"listen, watch, and play\". \nI spent amazing two years as a mobile app engineer at QQ Music and gained a passion for product design in this job. I collaborated with product managers, UI/UX designers, and other engineers to define and deliver more than 10 new features for QQ Music, which includes the music community feature, achieving 10 million DAU, and the listen together room feature, achieving 500 thousand DAU.", 
    github: '',
    timeline: "April 2019 - July 2021",
    takeaway: '1. The work at Tencent made me aware of the power of design. Currently, I value friendly user experience and design in my daily work and I am also determined to design and ship beautiful designs to the whole world. \n2. Through more than two years of agile development, I have greatly improved my software development capabilities. I have improved my ability to implement the user interface, I can develop and deliver the design draft with high quality very quickly and confidently.'},

    // Instagram
    {projectName: "Instagram AR"},

    // Personal Website
    {projectName: "Personal Website", 
    video: "", 
    language: "Front-end: React, HTML, CSS, Javascript", 
    type: "Personal Project", 
    about: "As an Android engineer who has learned Android development for more than 5 years and worked as a full-time Android developer for more than 2 years, when I saw the job requirement for UX Engineer/Design technologist, I felt confused about why HTML/CSS/JS/React is required and why XML/Java/Kotlin is generally not required. \nTo figure out this question, I enrolled in Meta Front-end Development Professional Certificate, and I know that front-end development is more versatile! Android applications can only run on Android devices but web applications can not only run on the web browser but also on mobile devices. Thousands of apps are conducted with React Native, including Facebook, Microsoft Office, Discord, and more! Also, with web responsive development support, developers can make their web applications look perfect on all-size devices!! So it's not hard to understand why HTML/CSS/JS/React is required for UX engineers and Design Technologists!! \nSo far I've achieved 4 certificates: Introduction to front-end development, Programming with Javascript, HTML, and CSS in depth, and React Basics. And to practice what I learned in this course and learn more front-end development skills, I also developed this website with React from 0 to 1 and deployed it to GitHub. ", 
    github: 'https://github.com/Bobkong/portfolio/tree/main/portfolio',
    timeline: "September 2022 - October 2022",
    takeaway: ""},

    // EasyMed
    {projectName: "EasyMed"},

    // ARamsay
    {projectName: "ARamsay"},

    // Super Plant
    {projectName: "Super Plant", 
    video: "https://www.youtube.com/watch?v=R-v5pJUZQVU", 
    language: "Cocos2D-x: C#", 
    type: "Course Project", 
    about: "A Cocos 2D game combining Super Mario and Plants vs. Zombies.", 
    github: 'https://github.com/Bobkong/cocos2dx-PlantVsZombieRPG',
    timeline: "October 2017 - December 2017",
    takeaway: ""},

    // Feca
    {projectName: "Feca", 
    video: "https://www.youtube.com/shorts/YTFJCQCsYi4", 
    language: "Android: Java, Kotlin, XML", 
    type: "Chinese National Software Design Contest", 
    about: "When I traveled around the United States, I wanted to buy lipstick as a gift for my sister's birthday. However, I don't know which lipstick is suitable for my sister, so I just bought a random one. And as a result, my sister didn't like the color of the lipstick very much. Based on this problem, I designed and developed Feca, which is an android software that uses face recognition technology to help users try virtual makeup.\nThe main function of Feca is virtual makeup Users can upload a photo and then try different cosmetics such as lipstick, eye shadow, blush, etc. By using Feca, they can figure out what is the best cosmetics for them without going to the mall. Another main function of this software is the makeup forum. In the forum, users can post his/her makeup diary, share the results of using different cosmetics, and recommend cosmetics.\nI participated Chinese National Software Design Contest with Feca and won the first prize out of 7445 teams and the most investment value prize.", 
    github: 'https://github.com/Bobkong/Feca',
    timeline: "January 2018 - May 2018",
    takeaway: ""},

    // Mecat
    {projectName: "Mecat", 
    video: "https://www.youtube.com/watch?v=GQWRpgp7JJo", 
    language: "Robotics: Arduino, Processing", 
    type: "Course Project", 
    about: "A medical and emotional care robot, which can give pills and tell stories.", 
    github: '',
    timeline: "April 2022",
    takeaway: ""},];

function GithubRepo(props) {
    if (props.github != null && props.github != "") {
        return (
        <div id="develop-github" onClick={() => {window.open(props.github)}}>
        VIEW GITHUB REPO
        </div>);
    }
}

function VideoPlayer(props) {
    if (props.video != null && props.video != "") {
        return (
        <div>
            <p className='title-color title-size'>Video</p>
            <div className="player-wrapper margin-top-one-rem">
                <ReactPlayer
                url={props.video}
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
                />
            </div>
        </div>);
    }
}

function QQMusic(props) {
    if (props.projectName != null && props.projectName == "Tencent Music") {
        return (
            <div>
                <p className='title-color title-size'>Feedback about Me</p>
                <img id="qqmusic-feedback" src={QQMusicFeedback} />
                <p className='title-color title-size'>My Lovely Team</p>
                <div id='qqmusic-team'>
                    <img id="qqmusic-team-img" src={QQMusicTeam1} />
                    <img id="qqmusic-team-img" src={QQMusicTeam2} />
                </div>
                
            </div>
            
        );
    }
}

function PersonalWebsite(props) {
    if (props.projectName != null && props.projectName == "Personal Website") {
        return (
            <div>
                <img id="qqmusic-feedback" src={Certificate} />
            </div>
            
        );
    }
}

function Takeaway(props) {
    if (props.takeaway != null && props.takeaway != "") {
        return (
            <div>
                <p className='title-color title-size'>Takeaway</p>
                <p className='body-color body-size' style={{whiteSpace: 'pre-wrap', lineHeight: 1.5}}>{props.takeaway}</p>
            </div>
            
        );
    }
}

function DevelopWork(props) {
    const {state} = useLocation();
    console.log(state.name);

    const project = development.find(item => item.projectName == state.name);
    return (
    <div id="dev-work-div">
        <p className='title-color extra-title-size' id='dev-project-name'>{project.projectName}</p>
        <p className='body-color sub-title-size' id='dev-timeline'>{project.type} / {project.timeline}</p>
        <span className='sub-body-color body-size'>Tech Stack - {project.language}</span>
        <GithubRepo github={project.github}/>
        <hr id='divide-line'/>
        <p className='title-color title-size'>About</p>
        <p className='body-color body-size' style={{whiteSpace: 'pre-wrap', lineHeight: 1.5}}>{project.about}</p>
        <PersonalWebsite projectName={project.projectName} />
        <VideoPlayer video={project.video}/>
        <QQMusic projectName={project.projectName} />
        <Takeaway takeaway={project.takeaway} />
    </div>);
}

export default DevelopWork;