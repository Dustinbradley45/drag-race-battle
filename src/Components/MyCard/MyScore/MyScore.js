import React from "react";
import "./MyScore.css";

const MyScore = (props) => {
    return (
           <div className="myLifeWrapper">
                <h2><span className="slayPoints">Slay Points:</span> {props.myLife}</h2>
            </div>
    )
    
}

export default MyScore;