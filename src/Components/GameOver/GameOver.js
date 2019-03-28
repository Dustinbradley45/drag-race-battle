import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
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
            {/* <Link to='/'>Hello World</Link> */}
            
        </div>
    )
}

export default GameOver;