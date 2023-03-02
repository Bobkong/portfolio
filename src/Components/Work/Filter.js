import './Filter.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Filter(props) {

    return (
    <div id="filter-div">
        <Link to="/design" className={props.tag == "0" ? "selectedTag" : "unSelectedTag"}>
            UI/UX Design
        </Link>
        <Link to="/mobile" className={props.tag == "1" ? "selectedTag" : "unSelectedTag"}>
            Mobile Development
        </Link>
        <Link to="/arvr" className={props.tag == "2" ? "selectedTag" : "unSelectedTag"}>
            AR/VR
        </Link>
        <Link to="/web" className={props.tag == "3" ? "selectedTag" : "unSelectedTag"}>
            Web Development
        </Link>
        <Link to="/other" className={props.tag == "4" ? "selectedTag" : "unSelectedTag"}>
            Other Experiments
        </Link>
    </div>);
}

export default Filter;