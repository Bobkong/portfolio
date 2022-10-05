import './FullCoverProject.css';

var mouseOver = false;
function hoverIn() {
    mouseOver = true;
}

function hoverOut() {
    mouseOver = false;
}

function FullCoverProject(props) {

    // define the hover effect
    var viewProjectId, viewProjectTextId;
    if (props.theme == 0) {
        if (mouseOver) {
            viewProjectId = "view-project-hover";
            viewProjectTextId = "view-project-text-hover";
        } else {
            viewProjectId = "view-project";
            viewProjectTextId = "view-project-text";
        }
    } else {
        if (mouseOver) {
            viewProjectId = "view-project-hover";
            viewProjectTextId = "view-project-text-1-hover";
        } else {
            viewProjectId = "view-project-1";
            viewProjectTextId = "view-project-text-1";
        }
    }
    
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
            <div id={viewProjectId} onClick={() => {window.open(props.url, '_self')}} onMouseOver={hoverIn} onMouseLeave={hoverOut}>
                <span id={viewProjectTextId}>VIEW PROEJCT</span>
            </div>
        </div>
    </div>);
}

export default FullCoverProject;