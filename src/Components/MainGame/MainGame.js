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
        const { loseOpponentLife, opponentAttack } = this;
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
                                randomLifeNumber={randomLifeNumber}
                                opponentAttack={opponentAttack}
                        />

                        <OpponentScore
                            opponentLife={opponentLife}
                            attack={randomLifeNumber}
                            />
                           
                        <MyCard
                            userChoice={userChoice}
                            randomLifeNumber={randomLifeNumber}
                
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