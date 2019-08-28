import React, { Component } from 'react';
import {LEADS_API} from "../../config/coms";
import NewLead from './NewLead';
import Lead from "./Lead"

class Leads extends Component {
    state = {
        leads: [],
        leadsFormatted: []
    }
    getLeads = () => {
        // fetch(`${LEADS_API}/leads`)
        //     .then(response => response.json())
        //     .then(data => console.log("leads:", data))
        //     .catch(console.log);
        fetch(`${LEADS_API}/leads`)
          .then(response => response.json())
          .then(body => body.map(jsonLead => <Lead leadData={jsonLead} />))
          .then(components => this.setState({ leads: components }))
          .catch(console.log);
    }
    componentDidMount() {
        this.getLeads()
    }
    render(){
        return(
            <>
                Job Tracker
                <NewLead reload = {this.getLeads}/>
                our Leads array: {this.state.leads}
            </>
        )
    }
}


export default Leads;