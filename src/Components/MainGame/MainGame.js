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
            opponentAttackNumber:"",

        }
        
    }
    
    // FUNCTION FIRES AFTER CLICK OF USER BUTTON
    opponentAttack = () => {
        // GET RANDOM NUMBER BETWEEN ONE AND 4
        const opponentAttackNumber = Math.floor(Math.random() * 4) + 1;

        // SUBTRACT ATTACK FROM MY LIFE,
        // DIRECT BACK TO USER TURN,
        // SAVE OPPONENT ATTACK TO USE IN OPPONENT BATTLE INFO COMPONENT
        this.setState({
            myLife: this.state.myLife - opponentAttackNumber,
            turnDirector: "user",
            opponentAttackNumber:opponentAttackNumber
        })

        // IF MY LIFE IS LESS THAN OR EQUAL TO 0 THEN END GAME
       setTimeout(() => {
           if (this.state.myLife <= 0) {
               this.setState({
                   redirectToEnd: true,

               })
           }
       }, 400);
    }

    // ON CLICK OF ATTACK BUTTON GET RANDOM NUMBER BETWEEN 1 and 4
    loseOpponentLife = (e) => {
          const getRanNumber = Math.floor(Math.random() * 4) + 1;
          
        // SET STATE FOR RANDOM LIFE NUMBER ,
        // SUBTRACT  RANDOM LIKEF NUMBER FROM OPPONENT LIFE,
        // GO TO COMPUTER
          this.setState({
              randomLifeNumber: getRanNumber,
              opponentLife: this.state.opponentLife - getRanNumber,
              turnDirector: "computer"
          })
        
        // IF OPPONENT LIFE = 0 THEN END GAME
        setTimeout(() => {
            if (this.state.opponentLife <= 0) {
                this.setState({
                    redirectToEnd: true,
                })
            }
        }, 400);
        
        // CALL OPPONENT ATTACK
        setTimeout(() => {
            this.opponentAttack();
        }, 2000);
        
        

      }
      render() {
        const { loseOpponentLife, opponentAttack } = this;
        const { redirectToEnd, turnDirector, opponentLife, randomLifeNumber, myLife, opponentAttackNumber } = this.state;
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
                            <div className="opponentSide">
                                 <OpponentCard
                                allQueensData={allQueensData}
                                randomLifeNumber={randomLifeNumber}
                                opponentAttack={opponentAttack}
                                opponentAttackNumber={opponentAttackNumber}
                            />

                            <OpponentScore
                                opponentLife={opponentLife}
                                attack={randomLifeNumber}
                                />
                        </div>
                       
                            <div className="mySide">
                                <div className="mySideBody">
                                    <MyCard
                                        userChoice={userChoice}
                                        randomLifeNumber={randomLifeNumber}
                    
                                    />
                            
                                    <MyScore
                                        myLife={myLife}
                                    />
                                </div>

                                <MyAttacks
                                    loseOpponentLife={loseOpponentLife}
                                    changeTurn={turnDirector}
                                />
                           </div>
                       
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