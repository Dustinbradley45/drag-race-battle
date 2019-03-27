import React from "react";
import "./GameOver.css";

const GameOver = (props) => {
    return (
        <div className="endGameWrapper">
            <h1>GAME OVER!</h1>
            {
                props.myScore <= 0 ?
                    <h2>Sorry Henny, you lost.</h2> :
                    <h2>You Won! Guess you are a superstar.</h2>
            }
            <button onClick={props.startGame}>Wanna Try Again?</button>
        </div>
    )
}

export default GameOver;