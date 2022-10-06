import './Filter.css';
import {FilterContext} from './Main';
import React from 'react';


function Filter() {
    const [tag, setTag] = React.useContext(FilterContext);

    return (
    <div id="filter-div">
        <li onClick={() => {setTag(0)}} className={tag == 0 ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>Design</li>
        <li onClick={() => {setTag(1)}} className={tag == 1 ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>Development</li>
        {/* <li onClick={() => {setTag(2)}} className={tag == 2 ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>Fun Work</li> */}
    </div>);
}

export default Filter;