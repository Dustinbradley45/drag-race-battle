import React, {Component} from 'react';
import axios from 'axios';
import "./MyCard.css";
import MyBattleInfo from "./MyBattleInfo/MyBattleInfo";

class MyCard extends Component {
    constructor() {
        super();
        this.state = {
            dragChoice: '',
        }
        
    }

    componentDidMount() {
        axios.get('http://www.nokeynoshade.party/api/queens', {
            params: {
                method: "GET",
                name: this.props.userChoice,
            }
        }).then((data)=> {
            const userChoiceDetails = data.data[0];
            this.setState({
                dragChoice:userChoiceDetails
            })
            
        }) 
    }

    render() {
        const { dragChoice } = this.state;
        const { randomLifeNumber } = this.props;
        return (
            <div className="myCardContainer">
            <div className="myCardWrapper">
                <h2>{this.state.dragChoice.name}</h2>
                <div className="myCardImageWrapper">
                    <img src={this.state.dragChoice.image_url}/>
                </div>
            
                </div>
                <div className="battleInfoContainer">
                 <MyBattleInfo
                        dragChoice={dragChoice}
                        randomLifeNumber={randomLifeNumber}
                />

                </div>
                            

            </div>

 
        )
    }
}

export default MyCard;