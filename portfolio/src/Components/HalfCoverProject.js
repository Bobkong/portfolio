import './HalfCoverProject.css';
import { Link, hash } from "react-router-dom";

function Instagram(props) {
    if (props.projectName == "Instagram AR") {
        return( <div onClick={() => {window.open("https://www.lingshuangkong.com/work/instagram", '_self')}} style={{ cursor: "pointer" }}>
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
    </div>
    );
       
    }
}

function OtherProject(props) {
    if (props.projectName != "Instagram AR") {
       return(
        <Link to={'/develop/work'} state={{name:props.projectName}} style={{textDecoration: 'none'}}>
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
        </Link>
       ); 
    }

}
function HalfCoverProject(props) {
    return (
        <div>
            <OtherProject bg={props.bg} role={props.role} projectName={props.projectName} type={props.type} description={props.description} theme={props.theme} url={props.url}/>
            <Instagram bg={props.bg} role={props.role} projectName={props.projectName} type={props.type} description={props.description} theme={props.theme} url={props.url}/>
        </div>

        );
}

export default HalfCoverProject;