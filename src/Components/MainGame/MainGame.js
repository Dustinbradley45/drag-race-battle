import React, { Component } from 'react';
import MyCard from './../MyCard/MyCard.js';
import OpponentCard from './../OpponentCard/OpponentCard.js';
import "./MainGame.css";
import OpponentScore from '../../OpponentScore/OpponentScore.js';
import MyScore from "./../MyScore/MyScore.js";
import MyAttacks from "./../MyAttacks/MyAttacks.js";
import GameOver from "./../GameOver/GameOver.js";


class MainGame extends Component {
    constructor() {
        super();
        this.state = {
            opponentLife: 10,
            myLife: 10,
            randomLifeNumber: "",
            turnDirector: "user",
            redirectToEnd: false

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

 

        return (
            <div className="gameBoard wrapper">
                {
                    this.state.redirectToEnd === false ?
                        
                    <React.Fragment>
                        <div className="whosTurn">
                            {
                                this.state.turnDirector === "user" ?
                                    <h3>It's your Turn!</h3> :
                                    <h3>It's your Opponents Turn!</h3>
                            }
                        </div>
               
                        <OpponentCard
                            allQueensData={this.props.allQueensData}
                        />

                        <OpponentScore
                            opponentLife={this.state.opponentLife}
                            attack={this.state.randomLifeNumber}
                        />
                        <MyCard
                            userChoice={this.props.userChoice}
                
                        />
                        <MyScore
                            myLife={this.state.myLife}

                        />
                        <MyAttacks
                            loseOpponentLife={this.loseOpponentLife}
                            changeTurn={this.state.turnDirector}
                            />
                          
                        </React.Fragment>
                        : <GameOver
                            myScore={this.state.myLife}
                            opponentScore={this.state.opponentLife}
                            startGame={this.props.startGame}
                            tryAgain={this.props.tryAgain}
                        />
                }
            </div>
        )
    }

}

export default MainGame;