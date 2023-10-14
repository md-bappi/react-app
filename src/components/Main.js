import React, { Component } from "react";
import { One } from "./One";
import { Two } from "./Two";
import { Three } from "./Three";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: 0,
      count: 0,
      number: 0,
    };
  }
  // goals
  incrementgoals = () => {
    this.setState({
      goals: this.state.goals + 1,
    });
  };
  decrementgoals = () => {
    this.setState({
      goals: this.state.goals - 1,
    });
  };
  // count
  incrementcount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementcount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  // number
  incrementnumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  decrementnumber = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="child">
          <h1>goals: {this.state.goals}</h1>
          <One
            incrementgoals={this.incrementgoals}
            decrementgoals={this.decrementgoals}
          />
        </div>
        <div className="child">
          <h1>count: {this.state.count}</h1>
          <Two
            incrementcount={this.incrementcount}
            decrementcount={this.decrementcount}
          />
        </div>
        <div className="child">
          <h1>number : {this.state.number}</h1>
          <Three
            incrementnumber={this.incrementnumber}
            decrementnumber={this.decrementnumber}
          />
        </div>
      </div>
    );
  }
}
