import React from "react";
import "./OpponentBattleInfo.css";


const OpponentBattleInfo = (props) => {
    return (
        <div className="opponentBattleInfoWrapper">
            <h2>{props.opponentQuote}</h2>
        </div>
    )
}

export default OpponentBattleInfo;