import React, { Component } from "react";

export default class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      skill: "",
    };
  }
  // first name
  firstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  // last name
  lastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  // skill
  skillHandler = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };
  // submit
  submitHandler = (event) => {
    event.preventDefault();
    // alert(
    //   `Name: ${this.state.firstName}${this.state.lastName} Skill: ${this.state.skill}`
    // );
    console.log(this.state.firstName, this.state.lastName, this.state.skill);
  };
  render() {
    return (
      <form onSubmit={(event) => this.submitHandler(event)}>
        <div>
          <label htmlFor="first-name">First name:</label>
          <input
            required
            type="text"
            id="first-name"
            value={this.state.firstName}
            onChange={(event) => this.firstNameHandler(event)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name:</label>
          <input
            required
            type="text"
            id="last-name"
            value={this.state.lastName}
            onChange={(event) => this.lastNameHandler(event)}
          />
        </div>
        <div>
          <select
            value={this.state.skill}
            onChange={(event) => this.skillHandler(event)}
          >
            {/* <option value="">Select your skill</option> */}
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angualar">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
