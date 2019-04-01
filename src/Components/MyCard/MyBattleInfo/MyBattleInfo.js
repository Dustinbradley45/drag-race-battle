import React from "react";
import "./MyBattleInfo.css";

const MyBattleInfo = (props) => {
    const { dragChoice, randomLifeNumber } = props;

    return (
        <div className="myBattleInfoWrapper">
            {
                randomLifeNumber === "" ?
                    <React.Fragment>
                        <h2>{dragChoice.quote}</h2>
                        <h2>-{dragChoice.name}</h2>
                    </React.Fragment>
                    : randomLifeNumber === 4 ? 
                        <h2>Critical Hit! </h2> :
                        randomLifeNumber === 3 ?
                            <h2>Lose 3 Slay Points Squirrelfriend.</h2> :
                            randomLifeNumber === 2 ?
                                <h2>Ahh! Near miss. Lose 2 Slay Points.</h2> :
                                randomLifeNumber === 1 ?
                                    <h2>WEEEAK. Barely a scratch, only one slay point lost.</h2> :
                                    null
                    
            }
        </div>
    )
}

export default MyBattleInfo;

//  checkAttack = () => {
         //     if (this.state.randomLifeNumber === 1) {
         //         <h2>Critical Hit! Lose 30 Slay Points Henny.</h2>
         //         this.setState({
         //             opponentLife: this.state.opponentLife - 30
         //         });
         //     } else if (this.state.randomLifeNumber === 2) {
         //         <h2>Lose 20 Slay Points Squirrelfriend.</h2>
         //         this.setState({
         //             opponentLife: this.state.opponentLife - 20
         //         });
         //     } else if (this.state.randomLifeNumber === 3) {
         //         <h2>Ahh! Near miss. Lose 10 Slay Points.</h2>
         //         this.setState({
         //             opponentLife: this.state.opponentLife - 10
         //         });
         //     } else {
         //         <h2>Your eyelash on straight? You missed! No points lost.</h2>
         //     }
         // }