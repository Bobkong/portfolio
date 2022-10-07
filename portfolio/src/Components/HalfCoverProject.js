import './HalfCoverProject.css';
import { Link, hash } from "react-router-dom";

function HalfCoverProject(props) {
    return (
        <Link to={'/porfolio/develop/work'} state={{name:props.projectName}}>
            <div id="half-cover-project-div">
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
        </Link>);
}

export default HalfCoverProject;