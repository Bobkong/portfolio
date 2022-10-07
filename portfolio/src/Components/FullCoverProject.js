import './FullCoverProject.css';

function FullCoverProject(props) {


    return (
    <div id="full-cover-project-div" style={{background: `url("${props.bg}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
        <div id='full-cover-project-text'>
            <span className={props.theme ==0 ? "role" : "role-1"}>{props.role}</span>
            <div id='title'>
                <span id={props.theme == 0 ? "project-name" : "project-name-1"}>{props.projectName}</span>
                <span className={props.theme ==0 ? "type" : "type-1"}> | </span>
                <span className={props.theme ==0 ? "type" : "type-1"}>{props.type}</span>
            </div>
            <span id={props.theme == 0 ? "description" : "description-1"}>{props.description}</span>
            <div id={props.theme == 0 ? "view-project" : "view-project-1"} onClick={() => {window.open(props.url, '_self')}} style={{ cursor: "pointer" }}>
                VIEW PROJECT
            </div>
        </div>
    </div>);
}

export default FullCoverProject;