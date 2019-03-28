import React from "react";
import "./OpponentScore.css";

const OpponentScore = (props) => {
 
        return (
            <div className="opponentLifeWrapper">
                <h2>Slay Points: {props.opponentLife}</h2>
            </div>
        )
    }


export default OpponentScore;