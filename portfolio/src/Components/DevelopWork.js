import './DevelopWork.css';
import { useLocation } from "react-router-dom";
import React from 'react';
import ReactPlayer from 'react-player';


const development = [
    // Tencent
    {projectName: "Tencent Music", 
    video: 'https://youtu.be/PfwT_1XfYis', 
    language: "Android: Java, Kotlin, XML, JSON", 
    type: "Full-time Job", 
    about: "QQ Music was established in 2005. It focuses on providing more than 800 million users with the latest, hottest, and most comprehensive music content. With consistent innovation, it has initiated a variety of entertaining services that enable users to enjoy a trendy music entertainment experience integrating \"listen, watch, and play\". \nI spent amazing two years as a mobile app engineer at QQ Music and gained a passion for product design in this job. I collaborated with product managers, UI/UX designers, and other engineers to define and deliver more than 10 new features for QQ Music, which includes the music community feature, achieving 10 million DAU, and the listen together room feature, achieving 500 thousand DAU.", 
    github: '',
    timeline: "April 2019 - July 2021",
    takeaway: '1. The work at Tencent made me aware of the power of design. I value friendly user experience and design in my daily work and I am also determined to design and ship beautiful designs to the whole world. \n2. Through more than two years of agile development, I have greatly improved my software development capabilities. I have improved my ability to implement the user interface, I can develop and deliver the design draft with high quality very quickly and confidently.'},

    // Instagram
    {projectName: "Instagram AR", 
    video: "", 
    language: "AR Prototyping: Reactive, JavaScript", 
    type: "Internship", 
    about: "New Instagram AR effects utilizing the hand-tracking capability.", 
    github: '',
    timeline: "June 2022 - September 2022",
    takeaway: ""},

    // Personal Website
    {projectName: "Personal Website", 
    video: "", 
    language: "Front-end: React, HTML, CSS, Javascript", 
    type: "Personal Project", 
    about: "A portfolio built during Meta Front-end Development Certificate courses.", 
    github: 'https://github.com/Bobkong/portfolio/tree/main/portfolio',
    timeline: "September 2022 - October 2022",
    takeaway: ""},

    // EasyMed
    {projectName: "EasyMed", 
    video: "", 
    language: "Android: Java, Kotlin, XML, JSON", 
    type: "Microsoft AI Hackathon", 
    about: "An AI-assisted application for checking drug and food interactions.", 
    github: 'https://github.com/Bobkong/Easy-Drug-Android',
    timeline: "May 2022 - June 2022",
    takeaway: ""},

    // ARamsay
    {projectName: "ARamsay", 
    video: "", 
    language: "AR & Back-end: Unity3D, C#. Nodejs", 
    type: "Course Project", 
    about: "An AR cooking assistant on HoloLens 2 for learning recipes more smoothly.", 
    github: 'https://github.com/ARamsay118',
    timeline: "November 2021 - December 2021",
    takeaway: ""},

    // Super Plant
    {projectName: "Super Plant", 
    video: "", 
    language: "Cocos2D-x: C#", 
    type: "Course Project", 
    about: "A Cocos 2D game combining Super Mario and Plants vs. Zombies.", 
    github: 'https://github.com/Bobkong/cocos2dx-PlantVsZombieRPG',
    timeline: "October 2017 - December 2017",
    takeaway: ""},

    // Feca
    {projectName: "Feca", 
    video: "", 
    language: "Android: Java, Kotlin, XML", 
    type: "Chinese National Software Design Contest", 
    about: "A virtual makeup and shopping Android application based on face recognition algorithms", 
    github: '',
    timeline: "January 2018 - May 2018",
    takeaway: ""},

    // Mecat
    {projectName: "Mecat", 
    video: "", 
    language: "Robotics: Arduino, Processing", 
    type: "Course Project", 
    about: "A medical and emotional care robot, which can give pills and tell stories.", 
    github: '',
    timeline: "April 2022",
    takeaway: ""},];

function GithubRepo(props) {
    if (props.github != null && props.github != "") {
        return (
        <div id="develop-github" onClick={() => {window.open(props.github)}} style={{ cursor: "pointer" }}>
        VIEW GITHUB REPO
        </div>);
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
        <p className='title-color title-size'>Video</p>
        <ReactPlayer className='react-player' url={project.video} controls={true} width='100%'/>
        <p className='title-color title-size'>Takeaway</p>
        <p className='body-color body-size' style={{whiteSpace: 'pre-wrap', lineHeight: 1.5}}>{project.takeaway}</p>
    </div>);
}

export default DevelopWork;