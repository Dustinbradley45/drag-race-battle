import React, { Component } from 'react';
import MyCard from './../MyCard/MyCard.js';
import OpponentCard from './../OpponentCard/OpponentCard.js';
import "./MainGame.css";
import OpponentScore from '../../OpponentScore/OpponentScore.js';


class MainGame extends Component {
    constructor() {
        super();
        this.state = {
            opponentLife: 100,
            myLife: ""

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
                    className="myCard"
                    
                 />
            </div>
        )
    }

}

export default MainGame;