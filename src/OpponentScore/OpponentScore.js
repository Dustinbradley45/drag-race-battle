import React, { Component } from "react";
import "./OpponentScore.css";

class OpponentScore extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="opponentLifeWrapper">
                <h2>{this.props.opponentLife}</h2>
            </div>
        )
    }
}

export default OpponentScore;