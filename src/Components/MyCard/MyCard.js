import React, {Component} from 'react';
import axios from 'axios';
import "./MyCard.css";

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
        console.log(this.state.dragChoice);
        return (
            <div className="myCardWrapper">
                <h2>{this.state.dragChoice.name}</h2>
                <div className="myCardImageWrapper">
                    <img src={this.state.dragChoice.image_url}/>
                </div>

            </div>
 
        )
    }
}

export default MyCard;