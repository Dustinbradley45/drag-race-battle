import React from "react";
import "./MyAttacks.css";

const MyAttacks = (props) => {

    return (
        <div className="myAttacksWrapper">
            {
                props.changeTurn === "user" ?
                <React.Fragment>
                    <button data-id="1" onClick={props.loseOpponentLife}>Slay</button>
                    <button data-id="2" onClick={props.loseOpponentLife}>Werk</button>
                    <button data-id="3" onClick={props.loseOpponentLife}>Bye, Henny</button>
                    <button data-id="4" onClick={props.loseOpponentLife}>Death Drop</button>
                </React.Fragment>
                    : null
            }
        </div>
    )
}

export default MyAttacks;