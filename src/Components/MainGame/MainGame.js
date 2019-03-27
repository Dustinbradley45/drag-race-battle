import React, { Component } from 'react';
import MyCard from './../MyCard/MyCard.js';
import OpponentCard from './../OpponentCard/OpponentCard.js';
import "./MainGame.css";
import OpponentScore from '../../OpponentScore/OpponentScore.js';
import MyScore from "./../MyScore/MyScore.js";


class MainGame extends Component {
    constructor() {
        super();
        this.state = {
            opponentLife: 100,
            myLife: 100

        }
        
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
                />
                <MyCard
                    userChoice={this.props.userChoice}
                
                />
                <MyScore
                    myLife={this.state.myLife}    

                />
            </div>
        )
    }

}

export default MainGame;