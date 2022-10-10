import './FullCoverProject.css';

function FullCoverProject(props) {


    return (
    <div id="full-cover-project-div" >
        <div id="full-cover-more-than-768" style={{background: `url("${props.bg}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
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
        </div>
        

        <div id="full-cover-less-than-768" onClick={() => {window.open(props.url, '_self')}} style={{ cursor: "pointer" }}>
                    <div id='half-cover-img-div'>
                        <img id="half-cover-img" src={props.bg} />
                    </div>
                    <div id='half-cover-project-text'>
                        <span className="role">{props.role}</span>
                        <div id='title'>
                            <span id="project-name">{props.projectName}</span>
                            <span className="type"> | </span>
                            <span className="type">{props.type}</span>
                        </div>
                        <span id="description-half">{props.description}</span>
                    </div>
            </div>
        
    </div>);
}

export default FullCoverProject;