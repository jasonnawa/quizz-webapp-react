import React from "react";
import "../index.css"

export default function Home(props){
    return(
        <div className="container">
            <div className="edithome">
        <h1 className="title">Quizzical</h1>
        <p>Select appropriate answers to the multichoice questions provided</p>
        <button className="homebutton" onClick = {props.togglePage}> Start Quiz </button>
        </div>
        </div>
    )
}