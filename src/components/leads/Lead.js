import React from "react"

const Lead = ({ leadData }) => {
    return (
    <div id={leadData._id}>
      position:  {leadData.position}

    </div>
    )
}

export default Lead
