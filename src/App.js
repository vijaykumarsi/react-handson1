import './App.css';
import { Component} from "react";
import {ClasscComponent} from './Component/ClassComponent';
import  FunctionComponent from './Component/FunctionComponent';
import React from 'react';



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showfunction: false,
      showclass: false

    }

  }
  show1 = () => {
    this.setState({
      showfunction:!this.state.showfunction
    })}
    show2 = () => {
      this.setState({
        showclass:!this.state.showclass
      })
  }
  render() {
    return (
      <div>
        <h1 className='head'>Styling using Functional and Class Component</h1>
        <button className="btn2" onClick={this.show2}>To see styling in Class Component</button>
        <button className="btn1" onClick={this.show1}>To see styling in Functional Component</button>
     
     {this.state.showfunction && <FunctionComponent/>}
     {this.state.showclass && <ClasscComponent/>}
      </div>
  
    );
  }
  
}

export default App;
