import React from 'react';
import { IconContext } from "react-icons";
import { BsSearch } from 'react-icons/bs';

import './style.css';

function Search() {
    return (
        <div className="search-box">
            <div className='search-item'>
                <IconContext.Provider value={{ className: "search-logo" }}>
                    <BsSearch />
                </IconContext.Provider>
                <input type="text" placeholder="Search"></input>
            </div>
            <button><span>Buscar</span></button>
        </div>
    );
}

export default Search;
