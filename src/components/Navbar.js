import React from "react";
import logo from '../download.png';

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">ReactCourse - Project 1</h4>
        </nav>
        
    )
}