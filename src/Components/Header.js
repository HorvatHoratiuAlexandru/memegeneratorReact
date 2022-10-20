import React from "react";
import './Header.css';
import images from './imgData';

export default function Header (){
    return(
        <nav className="Header">
            <span className="Header--logo--wrapper">
                <img className="Header--logo--image" src={images.trollImg} alt=""></img>
                <h2 className="Header--logo--text">Meme Generator</h2>
            </span>
            <span>
                <h1>React Course - Project 3</h1>
            </span>
        </nav>
    );
}