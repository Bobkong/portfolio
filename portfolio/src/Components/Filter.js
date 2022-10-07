import './Filter.css';
import {FilterContext} from '../App';
import React from 'react';
import { Link } from 'react-router-dom';


function Filter() {
    const [tag, setTag] = React.useContext(FilterContext);

    return (
    <div id="filter-div">
        <Link to="/portfolio/" onClick={() => {setTag(0)}} className={tag == 0 ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Design
        </Link>
        <Link to="/portfolio/develop" onClick={() => {setTag(1)}} className={tag == 1 ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Development
        </Link>
        {/* <li onClick={() => {setTag(2)}} className={tag == 2 ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>Fun Work</li> */}
    </div>);
}

export default Filter;