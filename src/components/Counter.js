import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      goals: 0,
      number: 0,
      total: 0,
    };
    // bind constructor
    // bind of constructor process is afficient
    this.incrementNumber = this.incrementNumber.bind(this);
    this.decrementNumber = this.decrementNumber.bind(this);
  }
  // event handling of inline arrow function
  render() {
    return (
      <div>
        {/* event handling part 1 */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>increment</button>
        <button onClick={() => this.decrementCount()}>decrement</button>
        {/*  event handling of inline bind   part 2 */}
        <h1>Goals: {this.state.goals}</h1>
        <button onClick={this.incrementGoals.bind(this)}>increment</button>
        <button onClick={this.decrementGoals.bind(this)}>decrement</button>
        {/* event handling bind in constructor part 3*/}
        <h1>Number: {this.state.number}</h1>
        <button onClick={this.incrementNumber}>increment</button>
        <button onClick={this.decrementNumber}>decrement</button>
        {/* event handling  part 4*/}
        <h1>Total: {this.state.total}</h1>
        <button onClick={this.incrementTotal}>increment</button>
        <button onClick={this.decrementTotal}>decrement</button>
      </div>
    );
  }
  // arrow function calling
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  // event handling bind calling
  incrementGoals() {
    this.setState({
      goals: this.state.goals + 1,
    });
  }
  decrementGoals() {
    this.setState({
      goals: this.state.goals - 1,
    });
  }
  // event handling costructor bind calling
  incrementNumber() {
    this.setState({
      number: this.state.number + 1,
    });
  }
  decrementNumber() {
    this.setState({
      number: this.state.number - 1,
    });
  }
  // event handling Total
  incrementTotal = () => {
    this.setState({
      total: this.state.total + 1,
    });
  };
  decrementTotal = () => {
    this.setState({
      total: this.state.total - 1,
    });
  };
}
export default Counter;
