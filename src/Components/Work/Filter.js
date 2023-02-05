import './Filter.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Filter(props) {

    return (
    <div id="filter-div">
        <Link to="/design" className={props.tag == "0" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            UI/UX Design
        </Link>
        <Link to="/mobile" className={props.tag == "1" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Mobile Development
        </Link>
        <Link to="/arvr" className={props.tag == "2" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            AR/VR
        </Link>
        <Link to="/web" className={props.tag == "3" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Web Development
        </Link>
        <Link to="/other" className={props.tag == "4" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Other Experiments
        </Link>
    </div>);
}

export default Filter;