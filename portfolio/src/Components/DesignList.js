import './ProjectList.css';
import FullCoverProject from './FullCoverProject';

function DesignList() {
    const design = [{bg: require('../Assets/instagram_bg.png'), role: "AR DESIGN, UI/UX DESIGN", projectName: "Instagram AR", type: "Internship", description: "New Instagram AR effects utilizing the hand-tracking capability.", theme: 0, url: 'https://www.lingshuangkong.com/work/instagram'}, 
    {bg: require('../Assets/homni_bg.png'), role: "UX/UI DESIGN", projectName: "Homni Stroke Detector", type: "Part-time", description: "A machine learning-driven application for detecting patients' strokes.", theme: 1, url: 'https://lingshuang.webflow.io/work/homni-health'},
    {bg: require('../Assets/easymed_bg.png'), role: "UX/UI DESIGN, ANDROID DEVELOPMENT", projectName: "EasyMed", type: "Microsoft AI Hackathon", description: "An AI-assisted application for checking drug and food interactions.", theme: 1, url: 'https://lingshuang.webflow.io/work/easymed'},
    {bg: require('../Assets/nutrition_bg.png'), role: "UX/UI DESIGN", projectName: "Chipotle Nutrition", type: "Google Design Certificates", description: "A feature of Chipotle for finding out exactly how their meals stack up.", theme: 1, url: 'https://lingshuang.webflow.io/work/chipotle-nutrition-calculator'},
    {bg: require('../Assets/aramsay_bg.gif'), role: "AR DESIGN, AR PROTOTYPING", projectName: "ARamsay", type: "Course Project", description: "An AR cooking assistant on HoloLens 2 for learning recipes more smoothly.", theme: 0, url: 'https://lingshuang.webflow.io/work/aramsay'},];

    return (
    <div id="project-div-full">
        {design.map(project => <FullCoverProject key={project.projectName} bg={project.bg} role={project.role} projectName={project.projectName} type={project.type} description={project.description} theme={project.theme} url={project.url}/>)};
    </div>);
}

export default DesignList;