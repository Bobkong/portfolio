import './ProjectList.css';
import HalfCoverProject from './HalfCoverProject';

function DevelopList() {
    const development = [{bg: require('../Assets/qqmusic.gif'), role: "Android - Java, Kotlin, XML, JSON", projectName: "Tencent Music", type: "Full-time Job", description: "A Chinese music application serving for more than 800 million users", theme: 0, url: 'https://www.lingshuangkong.com/work/qqmusic'},
    {bg: require('../Assets/instagram-half.png'), role: "AR Prototyping - Reactive, JavaScript", projectName: "Instagram AR", type: "Internship", description: "New Instagram AR effects utilizing the hand-tracking capability.", theme: 0, url: 'https://www.lingshuangkong.com/work/instagram'},
    {bg: require('../Assets/mini-projects.jpeg'), role: "Front End - HTML, CSS, Javascript", projectName: "Front-end Mini Projects", type: "Personal", description: "9 mini projects developed with HTML 5, CSS 3, and Vanilla JavaScript.", theme: 0, url: 'https://bobkong.github.io/Front-end-Mini-Projects/'},
    {bg: require('../Assets/easymed-half.png'), role: "Android - Java, Kotlin, XML, JSON", projectName: "EasyMed", type: "Microsoft AI Hackathon", description: "An AI-assisted application for checking drug and food interactions.", theme: 0, url: 'https://www.lingshuangkong.com/work/easymed'},
    {bg: require('../Assets/aramsay_bg.gif'), role: "AR & Back End - Unity3D, C#. Nodejs", projectName: "ARamsay", type: "Course Project", description: "An AR cooking assistant on HoloLens 2 for learning recipes more smoothly.", theme: 0, url: 'https://www.lingshuangkong.com/work/aramsay'},
    {bg: require('../Assets/personal-website.png'), role: "Front End - React, HTML, CSS, Javascript", projectName: "Personal Website", type: "Personal", description: "A portfolio built during Meta Front-end Development Certificate courses.", theme: 0, url: 'https://www.lingshuangkong.com/work/easymed'},
    {bg: require('../Assets/superplant.gif'), role: "Cocos2D-x - C#", projectName: "Super Plant", type: "Course Project", description: "A Cocos 2D game combining Super Mario and Plants vs. Zombies.", theme: 0, url: 'https://www.youtube.com/watch?v=R-v5pJUZQVU&feature=youtu.be'},
    {bg: require('../Assets/feca.png'), role: "Android - Java, Kotlin, XML", projectName: "Feca", type: "Chinese National Software Design Contest", description: "A virtual makeup and shopping Android application based on face recognition algorithms.", theme: 0, url: 'https://www.youtube.com/shorts/YTFJCQCsYi4'},
    {bg: require('../Assets/mecat.gif'), role: "Robotics - Arduino, Processing", projectName: "Mecat", type: "Course Project", description: "A medical and emotional care robot, which can give pills and tell stories.", theme: 0, url: 'https://www.youtube.com/watch?v=GQWRpgp7JJo'}];

    return (
    <div id="project-div-half">
        {development.map(project => <HalfCoverProject key={project.projectName} bg={project.bg} role={project.role} projectName={project.projectName} type={project.type} description={project.description} theme={project.theme} url={project.url}/>)};
    </div>);
}

export default DevelopList;