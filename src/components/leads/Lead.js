import React from "react"
import CustomModal from "../../config/Modal";
import UpdateLead from "./UpdateLead"

const Lead = ({ leadData, reload }) => {
    return (
      <div id={leadData._id}>
        position: {leadData.position}
        <CustomModal btnText="Update" title="Update Lead">
          <UpdateLead reload={reload} lead={leadData} />
        </CustomModal>
      </div>
    );
}

export default Lead
