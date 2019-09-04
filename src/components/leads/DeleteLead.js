import React from "react";
import { LEADS_API } from "../../config/coms";

class DeleteLead extends React.Component {
 

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${LEADS_API}/leads/${this.props.id}`, {
      method: "DELETE"
    })
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
            Are you sure you want to delete??
            <button type="submit">dis gone</button>
          </form>
    );
  }
}

export default DeleteLead;
