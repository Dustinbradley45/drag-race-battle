import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./StartGame.css";

const StartGame = (props) => {
  return (
    <div className="flexWrap">


      <div className="instructionTextBox">
            <h2>Drag Race Fight!</h2>
            <p>Instructions: Pick a queen, pick a move, fight to the death!</p>
            <h3>Choose A Queen</h3>
            <form action="Submit">
                <label htmlFor="dragPicker"></label>
              <select
                  name="dragPicker"
                  id="dragPicker"
                  onChange={props.onChangeHandler}>
                    {
                      props.allDragQueens.map((queens,key) => {
                      return(
                        <option key={key}>{queens}</option>
                      )
                      })
                    }
                </select>
             
              <Link to="/MainGame"
                  onClick={props.startGame}>Start Your Engines!</Link>
            </form>
      </div>
      </div>
  )
}

export default StartGame;