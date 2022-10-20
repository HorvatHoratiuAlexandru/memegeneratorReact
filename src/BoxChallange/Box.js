import React from "react";
import './Box.css';

export default function Box(props){
    
    const style = {
        backgroundColor: props.isOn ? "#222222" : "transparent"
    }
    
    return(
        <div className="Box" style={style} onClick = {() => props.toggle(props.id)}>

        </div>
    );
}