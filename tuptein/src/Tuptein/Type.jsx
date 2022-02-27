import React from 'react';
import './Type.css';


export default class Type extends React.Component{
    constructor(props){
        super(props);

        //array stored in our state

        this.state = {
            array:[],
        };
    }

    //this method will reset the array on first load


    componentDidMount(){ 
        this.resetArray();
    }
 
    resetArray(){
        const array = [];
        var randomWords = require('random-words');
        //generates a random array with 100 elements
        for(let i = 0; i < 10; i++){
            array.push(randomWords(1));
        }
        this.setState({array});
    }

  render(){
    const {array} = this.state;    
    return (
      <div className = "type">
          <p className = "shadow">
             {array[0]} {array[1]} {array[2]} {array[3]} {array[4]} {array[5]} {array[6]} {array[7]} {array[8]} {array[9]} 
          </p>
        </div>
    );
  }
}

