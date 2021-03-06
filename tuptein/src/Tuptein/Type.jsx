import React, { Component } from 'react';
import Preview from './Preview';
import Speed from './Speed';
import getText from './getText';
import {} from './Type.css';

export default class Type extends React.Component{
    constructor(props){
        super(props);

        //array stored in our state

        this.state = {
            // array:[],
            // text: 'Test',
            // userInput: ''
            text: getText(),
            userInput: '',
            symbols: 0,
            sec: 0,
            started: false,
            finished: false
        };
    }
    state = this.state;
    //if the input of the user is equal to the text, clear the interval and finish. 



    onRestart = () => {
      this.setState({
        text: getText()
      })
    }
    
    onUserInputChange = (e) =>{
      const v = e.target.value;
      this.setState({
          userInput: v
      })
  }
  
  
    onFinish(userInput) {
        if (userInput === this.state.text) {
          clearInterval(this.interval);
          this.setState({
            finished: true
          })
        }
    }
    //
    //replaces the space with a space?

    


    onUserInputChange = (e) => {
        const v = e.target.value;
        this.setTimer(v);
        this.onFinish(v)
        this.setState({
          userInput: v,
          symbols: this.countCorrectSymbols(v)
        })
      }

   
      
    //this method will reset the array on first load

    countCorrectSymbols(userInput) {
      const text = this.state.text.replace(' ', '');
      return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length;
  }

    setTimer() {
        if (!this.state.started) {
          this.setState({started: true});
          this.interval = setInterval(() => {
            this.setState(prevProps => {
              return {sec: prevProps.sec + 1}
            })
          }, 1000)
        }
    }

    // componentDidMount(){ 
    //     this.resetArray();
    // }
 
    // resetArray(){
    //     const array = [];
    //     var randomWords = require('random-words');
    //     for(let i = 0; i < 10; i++){
    //         array.push(randomWords(1));
    //     }
    //     this.setState({array});
    // }

    

render() {
    return (
      <div>
          <div className="container" >
              <div className = "inner" style={{color: '#808080'}} >
              <Preview text={this.state.text} userInput={this.state.userInput}/>
              </div>
              <div className = "inner">
              <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="textarea"
            //   placeholder={this.state.text}
              readOnly={this.state.finished}
            ></textarea>
              </div>
          </div>
          <Speed sec={this.state.sec} symbols={this.state.symbols}/>
           
            <div>
            <button className = "button" onClick={() => this.onRestart()}>Restart</button>
          
            </div>

            
          </div>
      
    );
  }
}

