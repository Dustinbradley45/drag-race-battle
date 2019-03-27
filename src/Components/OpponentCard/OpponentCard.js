import React, { Component } from 'react';
import "./OpponentCard.css";
import axios from 'axios';

 



class OpponentCard extends Component {
    constructor() {
        super();
        this.state = {
            randomNumber: '',
            opponentChoice:"",
        }
    }

    getRanNum = () => {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        this.setState({
            randomNumber: randomNumber
        })
        return randomNumber;
        
    }

     getOpponent = (randomNumber) => {
       const opponent = this.props.allQueensData.find(queen => {
            return (
                queen.id === randomNumber
            )

       })
         this.setState({
            opponentChoice : opponent
         })
    }

    // maybe call this elseweher
    componentDidMount() {
         this.getOpponent(this.getRanNum())
        
    }
    render() { 
        const opponentData = this.state.opponentChoice
        
        return (
            <div className="opponentCardWrapper">
                <h2>{opponentData.name}</h2>
                <div className="opponentCardImageWrapper">
                    <img src={opponentData.image_url} alt={opponentData.name}/>
                </div>
            </div>
        )
    }
    

}
export default OpponentCard;