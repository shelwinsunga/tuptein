import React from 'react';
import './Type.css';

export default class Type extends React.Component{
    constructor(props){
        super(props);

        //array stored in our state

        this.state = {
            array:[],
            text:'Test',
            userInput: ''
        };
    }

    //this method will reset the array on first load


    componentDidMount(){ 
        this.resetArray();
    }
 
    resetArray(){
        const array = [];
        var randomWords = require('random-words');
        for(let i = 0; i < 10; i++){
            array.push(randomWords(1));
        }
        this.setState({array});
    }

  render(){
    const {array} = this.state;    
    return (
    <div>
      <div className = "type">
          <p className = "shadow">
             {array.map((array,i) => (
                 <span>
                    {array} <span> </span>
                 </span> 
             ))}
          </p>
       </div>
        <button onClick={() => this.resetArray()}> Reset</button>
    </div>
    );
  }
}
