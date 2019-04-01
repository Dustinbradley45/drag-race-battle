import React from "react";
import "./OpponentBattleInfo.css";


const OpponentBattleInfo = (props) => {
    const { opponentAttack,opponentQuote, opponentName } = props;
    return (
        <div className="opponentBattleInfoWrapper">
            {
                opponentAttack === "" ? 
                    <React.Fragment>
                        <h2>{opponentQuote}</h2>
                        <h2> - {opponentName}</h2>
                    </React.Fragment> :
                     opponentAttack === 4 ? 
                        <h2>Critical Hit! </h2> :
                        opponentAttack === 3 ?
                            <h2>Lose 3 Slay Points Squirrelfriend.</h2> :
                            opponentAttack === 2 ?
                                <h2>Ahh! Near miss. Lose 2 Slay Points.</h2> :
                                opponentAttack === 1 ?
                                    <h2>WEEEAK. Barely a scratch, only one slay point lost.</h2> :
                                    null
            }
            
          
        </div>
    )
}

export default OpponentBattleInfo;