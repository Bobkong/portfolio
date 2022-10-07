import './DevelopWork.css';
import { useLocation } from "react-router-dom";


const development = [
    // Tencent
    {projectName: "Tencent Music", 
    video: "", 
    language: "Android: Java, Kotlin, XML, JSON", 
    type: "Full-time Job", 
    about: "A Chinese music application serving for more than 800 million users", 
    github: '',
    timeline: "April 2019 - July 2021",
    takeaway: ""},

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
        <p className='body-color body-size'>{project.about}</p>
        <p className='title-color title-size'>Video</p>
        <p className='title-color title-size'>Takeaway</p>
    </div>);
}

export default DevelopWork;