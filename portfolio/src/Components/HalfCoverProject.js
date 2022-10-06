import './HalfCoverProject.css';


function HalfCoverProject(props) {

    return (
        <div id="half-cover-project-div" onClick={() => {window.open(props.url)}} style={{ cursor: "pointer" }}>
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
            
            
        </div>);
}

export default HalfCoverProject;