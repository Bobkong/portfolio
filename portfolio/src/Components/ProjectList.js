import './ProjectList.css';
import {FilterContext} from './Main';
import React from 'react';
import FullCoverProject from './FullCoverProject';
import HalfCoverProject from './HalfCoverProject';

function Project(props) {
    console.log(props.bg);
    if (props.tag== 0) {
        return <FullCoverProject bg={props.bg} role={props.role} projectName={props.projectName} type={props.type} description={props.description} theme={props.theme} url={props.url}/>
    } else {
        return <HalfCoverProject bg={props.bg} role={props.role} projectName={props.projectName} type={props.type} description={props.description} theme={props.theme} url={props.url}/>
    }
}


function ProjectList() {
    const [tag, setTag] = React.useContext(FilterContext);

    const productDesign = [{bg: require('../Assets/instagram_bg.png'), role: "AR DESIGN, AR PROTOTYPING", projectName: "Instagram AR", type: "Internship", description: "New Instagram AR effects utilizing the hand-tracking capability.", theme: 0, url: 'https://www.lingshuangkong.com/work/instagram'}, 
    {bg: require('../Assets/easymed_bg.png'), role: "UX/UI DESIGN, ANDROID DEVELOPMENT", projectName: "EasyMed", type: "Microsoft AI Hackathon", description: "An AI-assisted application for checking drug and food interactions.", theme: 1, url: 'https://www.lingshuangkong.com/work/easymed'},
    {bg: require('../Assets/homni_bg.png'), role: "UX/UI DESIGN", projectName: "Homni Stroke Detector", type: "Internship", description: "A machine learning-driven application for detecting patients' strokes.", theme: 1, url: 'https://www.lingshuangkong.com/work/homni-health'},
    {bg: require('../Assets/nutrition_bg.png'), role: "UX/UI DESIGN", projectName: "Chipotle Nutrition", type: "Google Design Certificates", description: "A feature of Chipotle for finding out exactly how their meals stack up.", theme: 1, url: 'https://www.lingshuangkong.com/work/chipotle-nutrition-calculator'},
    {bg: require('../Assets/aramsay_bg.gif'), role: "AR DESIGN, AR PROTOTYPING", projectName: "ARamsay", type: "Course Project", description: "An AR cooking assistant on HoloLens 2 for learning recipes more smoothly.", theme: 0, url: 'https://www.lingshuangkong.com/work/aramsay'},];

    const development = [{bg: require('../Assets/qqmusic.gif'), role: "Android: Java, Kotlin, XML, JSON", projectName: "Tencent - QQ Music", type: "Full-time Job", description: "A Chinese music application serving for more than 800 million users", theme: 0, url: 'https://www.lingshuangkong.com/work/qqmusic'},
    {bg: require('../Assets/instagram-half.png'), role: "AR Prototyping: Reactive, JavaScript", projectName: "Instagram AR", type: "Internship", description: "New Instagram AR effects utilizing the hand-tracking capability.", theme: 0, url: 'https://www.lingshuangkong.com/work/instagram'},
    {bg: require('../Assets/personal-website.png'), role: "Front-end: React, HTML, CSS, Javascript", projectName: "Personal Website", type: "Personal Project", description: "A portfolio built with React, showcasing my past design and development work.", theme: 0, url: 'https://www.lingshuangkong.com/work/easymed'},
    {bg: require('../Assets/easymed-half.png'), role: "Android: Java, Kotlin, XML, JSON", projectName: "EasyMed", type: "Microsoft AI Hackathon", description: "An AI-assisted application for checking drug and food interactions.", theme: 0, url: 'https://www.lingshuangkong.com/work/easymed'},
    {bg: require('../Assets/aramsay_bg.gif'), role: "AR & Back-end: Unity3D, C#. Nodejs", projectName: "ARamsay", type: "Course Project", description: "An AR cooking assistant on HoloLens 2 for learning recipes more smoothly.", theme: 0, url: 'https://www.lingshuangkong.com/work/aramsay'},
    {bg: require('../Assets/superplant.gif'), role: "Cocos2D-x: C#", projectName: "Super Plant", type: "Course Project", description: "A Cocos 2D game combining Super Mario and Plants vs. Zombies.", theme: 0, url: 'https://www.youtube.com/watch?v=R-v5pJUZQVU&feature=youtu.be'},
    {bg: require('../Assets/feca.png'), role: "Android: Java, Kotlin, XML", projectName: "Feca", type: "Chinese National Software Design Contest", description: "A virtual makeup and shopping Android application based on face recognition algorithms.", theme: 0, url: 'https://www.youtube.com/shorts/YTFJCQCsYi4'},
    {bg: require('../Assets/mecat.gif'), role: "Robotics: Arduino, Processing", projectName: "Mecat", type: "Course Project", description: "A medical and emotional care robot, which can give pills and tell stories.", theme: 0, url: 'https://www.youtube.com/watch?v=GQWRpgp7JJo'}];
    const funwork = [];
    var data = [];
    switch (tag) {
        case 0:
            data = productDesign;
            break;
        case 1:
            data = development;
            break;
        // case 2:
        //     data = funwork;
        //     break;
        default:
            data = [];
            break;
    };
    return (
    <div id={tag == 0 ? "project-div-full" : "project-div-half"}>
        {data.map(project => <Project key={project.projectName} tag={tag} bg={project.bg} role={project.role} projectName={project.projectName} type={project.type} description={project.description} theme={project.theme} url={project.url}/>)};
    </div>);
}

export default ProjectList;