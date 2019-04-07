import React from "react";
import "./OpponentScore.css";

const OpponentScore = (props) => {
 
        return (
            <div className="opponentLifeWrapper">
                <h2><span className="slayPoints">Slay Points:</span> {props.opponentLife}</h2>
            </div>
        )
    }


export default OpponentScore;