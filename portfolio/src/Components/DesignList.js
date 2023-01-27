import './ProjectList.css';
import FullCoverProject from './FullCoverProject';

function DesignList() {
    const design = [{bg: require('../Assets/instagram_bg.png'), role: "AR DESIGN, UI/UX DESIGN, B2C DESIGN", projectName: "Instagram AR", type: "AR Designer", description: "I empowered users to creatively express themselves by launching new Instagram AR effects utilizing the hand-tracking capability.", theme: 0, url: 'https://www.lingshuangkong.com/work/instagram'}, 
    {bg: require('../Assets/homni_bg.png'), role: "UX/UI DESIGN, USER RESEARCH, B2B DESIGN", projectName: "Homni Stroke Detector", type: "UI/UX Designer", description: "I helped stroke nurses and doctors save stroke patients' life more confidently by designing the machine learning-driven stroke detector application.", theme: 1, url: 'https://lingshuang.webflow.io/work/homni-health'},
    {bg: require('../Assets/easymed_bg.png'), role: "UX/UI DESIGN, USER RESEARCH", projectName: "EasyMed", type: "Microsoft AI Hackathon", description: "I eased the concern of adverse drug-to-drug and drug-to-food interactions by building an efficient and effective AI mobile application ", theme: 1, url: 'https://lingshuang.webflow.io/work/easymed'},
    {bg: require('../Assets/aramsay_bg.gif'), role: "AR DESIGN, AR PROTOTYPING", projectName: "ARamsay", type: "Course Project", description: "I created a more smooth cooking experience and saved time for learning new recipes by building an AR cooking assistant on HoloLens 2.", theme: 0, url: 'https://lingshuang.webflow.io/work/aramsay'},
    {bg: require('../Assets/nutrition_bg.png'), role: "UX/UI DESIGN, USER RESEARCH", projectName: "Chipotle Nutrition", type: "Google Design Certificates", description: "I helped Chipotle customers find out exactly how the nutrition of their meals stack up and choose the healthiest food for themselves.", theme: 1, url: 'https://lingshuang.webflow.io/work/chipotle-nutrition-calculator'},
    ];

    return (
    <div id="project-div-full">
        {design.map(project => <FullCoverProject key={project.projectName} bg={project.bg} role={project.role} projectName={project.projectName} type={project.type} description={project.description} theme={project.theme} url={project.url}/>)};
    </div>);
}

export default DesignList;