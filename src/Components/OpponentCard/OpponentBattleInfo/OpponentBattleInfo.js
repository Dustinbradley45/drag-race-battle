import React from "react";
import "./OpponentBattleInfo.css";


const OpponentBattleInfo = (props) => {
    const { opponentAttackNumber ,opponentQuote, opponentName } = props;
    return (
        <div className="opponentBattleInfoWrapper">
            {
                opponentAttackNumber === "" ? 
                    <React.Fragment>
                        <h2>{opponentQuote}</h2>
                        <h2> - {opponentName}</h2>
                    </React.Fragment> :
                     opponentAttackNumber === 4 ? 
                        <h2>Critical Hit! </h2> :
                        opponentAttackNumber === 3 ?
                            <h2>Lose 3 Slay Points Squirrelfriend.</h2> :
                            opponentAttackNumber === 2 ?
                                <h2>Ahh! Near miss. Lose 2 Slay Points.</h2> :
                                opponentAttackNumber === 1 ?
                                    <h2>WEEEAK. Barely a scratch, only one slay point lost.</h2> :
                                    null
            }
            
          
        </div>
    )
}

export default OpponentBattleInfo;