import React from "react"
import UpdateLead from "./UpdateLead"

const Lead = ({ leadData, reload }) => {
    return (
      <div id={leadData._id}>
        position: {leadData.position}
        <UpdateLead reload={reload} lead={leadData} />
      </div>
    );
}

export default Lead
