import React from "react";
import "./MyScore.css";

const MyScore = (props) => {
    return (
           <div className="myLifeWrapper">
                <h2>Slay Points: {props.myLife}</h2>
            </div>
    )
    
}

export default MyScore;