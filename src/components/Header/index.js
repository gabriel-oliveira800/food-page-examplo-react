import React, { useState } from 'react';
import { IconContext } from "react-icons";

import { BiFoodMenu, BiMenu } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';

import './style.css';

function Header() {
    const [expandedMenu, setExpandedMenu] = useState(false);


    const handExpanded = () => {
        setExpandedMenu(!expandedMenu);
    }

    return (
        <header className="header-box">

            <div className="header-menu">
                <IconContext.Provider value={{ className: "logo" }}  >
                    <BiFoodMenu />
                </IconContext.Provider>

                <div className="header-pages-bar">
                    <ul >
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Contato</a></li>
                        <li><a href="/">Ajuda</a></li>
                        <li><a href="/">Carreira</a></li>
                    </ul>
                    <a className="btn" href="/">Entrar</a>
                </div>

                <IconContext.Provider value={{ className: "icon-menu" }} >
                    <div onClick={handExpanded}>
                        {expandedMenu ? <VscClose /> : <BiMenu />}
                    </div>
                </IconContext.Provider>
            </ div >

            <div className={expandedMenu ? "header-pages" : "header-pages-closed"}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contato</a></li>
                    <li><a href="/">Ajuda</a></li>
                    <li><a href="/">Carreira</a></li>
                </ul>
                <a className="btn" href="/">Entrar</a>
            </div>
        </header>
    );
}

export default Header;
