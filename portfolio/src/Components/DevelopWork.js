import './DevelopWork.css';
import { useLocation } from "react-router-dom";


const development = [
    {video: "", 
    language: "Android: Java, Kotlin, XML, JSON", 
    projectName: "Tencent - QQ Music", 
    type: "Full-time Job", 
    about: "A Chinese music application serving for more than 800 million users", 
    github: 'https://www.lingshuangkong.com/work/qqmusic',
    timeline: "April 2019 - July 2021",
    takeaway: ""}];


function DevelopWork(props) {
    const {state} = useLocation();
    console.log(state.name);

    const project = development.find(item => item.projectName == state.name);
    return (
    <div id="dev-work-div">
        <p className='title-color extra-title-size' id='dev-project-name'>{project.projectName}</p>
        <p className='body-color sub-title-size' id='dev-timeline'>{project.type} / {project.timeline}</p>
        <span className='sub-body-color body-size'>Tech Stack - {project.language}</span>
        <hr id='divide-line'/>
        <p className='title-color title-size'>About</p>
        <p className='title-color title-size'>Video</p>
        <p className='title-color title-size'>Takeaway</p>
    </div>);
}

export default DevelopWork;