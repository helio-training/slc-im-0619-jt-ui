import React, { Component } from "react";
import { LEADS_API } from "../../config/coms";

class NewLead extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch(`${LEADS_API}/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(console.log)
      .then(() => this.props.reload());
  };

  //   handleChange = event => {
  //     this.setState({ [event.target.name]: [event.target.value] });
  //   };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="company"
            type="text"
            placeholder="Company"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default NewLead;
