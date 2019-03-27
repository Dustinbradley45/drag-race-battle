import React, { Component } from 'react';
import MyCard from './../MyCard/MyCard.js';
import OpponentCard from './../OpponentCard/OpponentCard.js';
import "./MainGame.css";
import OpponentScore from '../../OpponentScore/OpponentScore.js';
import MyScore from "./../MyScore/MyScore.js";
import MyAttacks from "./../MyAttacks/MyAttacks.js";


class MainGame extends Component {
    constructor() {
        super();
        this.state = {
            opponentLife: 10,
            myLife: 10,
            randomLifeNumber: "",
            turnDirector:"user"

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

    

      
    loseOpponentLife = (e) => {
          const getRanNumber = Math.floor(Math.random() * 4) + 1;
          
          this.setState({
              randomLifeNumber: getRanNumber,
              opponentLife: this.state.opponentLife - getRanNumber,
              turnDirector: "computer"
          })
        
        

      }
    render() {

 

      

    
        return (
            <div className="gameBoard wrapper">
               
                <OpponentCard
                    allQueensData={this.props.allQueensData}
                    // opponentChoice={this.props.opponentChoice}
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
            </div>
        )
    }

}

export default MainGame;