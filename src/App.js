import React, { Component } from 'react';
import StartGame from './Components/StartGame/StartGame.js'
import MainGame from './Components/MainGame/MainGame.js'
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor() {
    super();

    this.state = {
      allDragQueens: [],
      allQueensData: [],
      dragPicker: '',
      mainGameDirection: false,
      tryAgain:true,

    }
  }
    
  componentDidMount() {
    axios.get('http://www.nokeynoshade.party/api/queens/all', {
      params: {
        method: "GET",
      }
    }).then((res => {
      const allResponse = res.data;
      let dragName = [];
      this.setState({
        allQueensData:allResponse
      })
      allResponse.filter((items) => {
        return dragName.push(items.name)
      })

      this.setState({
        allDragQueens: dragName
      })  
    })
  )
}
  
  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

    startGame = (event) => {
        this.setState({
          mainGameDirection: !this.state.mainGameDirection
        })  
    } 



  

  render() {
    // {/* this.state.tryAgain === true ? */}
    return (
  
        <div className="App">
          
          {
            
              this.state.mainGameDirection === false ?
            
                  <StartGame
                  allDragQueens={this.state.allDragQueens}
                  onChangeHandler={this.onChangeHandler}
                  startGame={this.startGame}
                  />
            
                :

               <MainGame 
                  userChoice={this.state.dragPicker}
              allQueensData={this.state.allQueensData}
              allDragQueens={this.state.allDragQueens}
              tryAgain={this.tryAgain}
              
                  
                />
        }
        </div>
    
    );
  }
}

export default App;
