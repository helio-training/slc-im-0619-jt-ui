import React from "react";
import { LEADS_API } from "../../config/coms";

class UpdateLead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.lead.status,
      position: this.props.lead.position,
      company: this.props.lead.company,
      applied_thru: this.props.lead.applied_thru,
      date_applied: this.props.lead.date_applied,
      updated_date: this.props.lead.updated_date,
      links: this.props.lead.links,
      currentDate: new Date().toDateString()
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state)

    let { currentDate, ...body } = this.state;
    body.updated_date = currentDate;
    fetch(`${LEADS_API}/leads/${this.props.lead._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(() => {
        this.props.closeModal();
      })
      .then(() => {
        this.props.reload();
      })
      .catch(console.log);
  };

  render() {
    return (
          <form className='flexbox-col' onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              name="position"
              value={this.state.position}
            />
            <select
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="LEAD">Lead</option>
              <option value="APPLIED">Applied</option>
              <option value="PENDING">Pending</option>
              <option value="REMOTE">Remote</option>
              <option value="IN_PERSON">In Person</option>
              <option value="TECH_CHALLENGE">Tech Challenge</option>
              <option value="OFFERED">Offered</option>
              <option value="ACCEPT">Accepted</option>
              <option value="REJECT">Rejected</option>
            </select>
            <input
              type="text"
              onChange={this.handleChange}
              name="company"
              value={this.state.company}
            />
            <select
              name="applied_thru"
              value={this.state.applied_thru}
              onChange={this.handleChange}
            >
              <option value="LINKEDIN">LinkedIn</option>
              <option value="DICE">Dice</option>
              <option value="GOOGLE">Google</option>
              <option value="KSL">KSL</option>
              <option value="INDEED">Indeed</option>
              <option value="COMPANY">Company</option>
              <option value="SOCIAL">Social</option>
              <option value="NETWORKING">Networking</option>
              <option value="OTHER">Other</option>
            </select>
            date applied:
            <input
              type="date"
              value={this.state.date_applied}
              onChange={this.handleChange}
              name="date_applied"
            />
            last updated: {this.state.updated_date}
            {/* <input value={this.state.links} /> */}
            <button type="submit">Update</button>
          </form>
    );
  }
}

export default UpdateLead;
