import './Filter.css';
import {FilterContext} from './Main';
import React from 'react';


function Filter() {
    const [tag, setTag] = React.useContext(FilterContext);

    return (
    <div id="filter-div">
        <li onClick={() => {setTag(0)}} className={tag == 0 ? "selectedTag" : "unSelectedTag"}>Product Design</li>
        <li onClick={() => {setTag(1)}} className={tag == 1 ? "selectedTag" : "unSelectedTag"}>Development</li>
        <li onClick={() => {setTag(2)}} className={tag == 2 ? "selectedTag" : "unSelectedTag"}>AR/VR</li>
        <li onClick={() => {setTag(3)}} className={tag == 3 ? "selectedTag" : "unSelectedTag"}>Fun Work</li>
    </div>);
}

export default Filter;