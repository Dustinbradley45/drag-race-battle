import React, { Component } from 'react';
import MyCard from '../MyCard/MyCard.js';
import OpponentCard from './../OpponentCard/OpponentCard.js';
import "./MainGame.css";
import OpponentBattleInfo from "./../OpponentCard/OpponentBattleInfo/OpponentBattleInfo.js";
import OpponentScore from '../OpponentCard/OpponentScore/OpponentScore.js';
import MyScore from "../MyCard/MyScore/MyScore.js";
import MyBattleInfo from "../MyCard/MyBattleInfo/MyBattleInfo.js";
import MyAttacks from "../MyCard/MyAttacks/MyAttacks.js";
import GameOver from "./../GameOver/GameOver.js";


class MainGame extends Component {
    constructor() {
        super();
        this.state = {
            opponentLife: 10,
            myLife: 10,
            randomLifeNumber: "",
            turnDirector: "user",
            redirectToEnd: false,

        }
        
    }

//     checkAttack = () => {
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
    
    opponentAttack = () => {
        const opponentAttackNumber = Math.floor(Math.random() * 4) + 1;

        this.setState({
            myLife: this.state.myLife - opponentAttackNumber,
            turnDirector: "user"
        })

       setTimeout(() => {
           if (this.state.myLife <= 0) {
               this.setState({
                   redirectToEnd: true,

               })
           }
       }, 400);
    }

    loseOpponentLife = (e) => {
          const getRanNumber = Math.floor(Math.random() * 4) + 1;
          
          this.setState({
              randomLifeNumber: getRanNumber,
              opponentLife: this.state.opponentLife - getRanNumber,
              turnDirector: "computer"
          })
        
        setTimeout(() => {
            if (this.state.opponentLife <= 0) {
                this.setState({
                    redirectToEnd: true,

                })
            }
        }, 400);
        
        setTimeout(() => {
            this.opponentAttack();
        }, 1000);
        
        

      }
      render() {
        const { loseOpponentLife } = this;
        const { redirectToEnd, turnDirector, opponentLife, randomLifeNumber, myLife, opponentChoice } = this.state;
        const { allQueensData, userChoice, startGame, tryAgain } = this.props;
 

        return (
            <div className="gameBoard wrapper">
                {
                    redirectToEnd === false ?
                        
                    <React.Fragment>
                        <div className="whosTurn">
                            {
                                turnDirector === "user" ?
                                    <h3>It's your Turn!</h3> :
                                    <h3>It's your Opponents Turn!</h3>
                            }
                        </div>
               
                        <OpponentCard
                                allQueensData={allQueensData}
                                //  opponentChoice={opponentChoice}
                        />

                        <OpponentScore
                            opponentLife={opponentLife}
                            attack={randomLifeNumber}
                            />
                           
                        <MyCard
                            userChoice={userChoice}
                
                        />
                        <MyBattleInfo
                             userChoice={userChoice}
                            />
                            
                        <MyScore
                            myLife={myLife}

                        />
                        <MyAttacks
                            loseOpponentLife={loseOpponentLife}
                            changeTurn={turnDirector}
                            />
                          
                    </React.Fragment>
                        : <GameOver
                            myScore={myLife}
                            opponentScore={opponentLife}
                            startGame={startGame}
                            tryAgain={tryAgain}
                        />
                }
            </div>
        )
    }

}

export default MainGame;