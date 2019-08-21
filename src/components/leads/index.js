import React, { Component } from 'react';
import {LEADS_API} from "../../config/coms";
import NewLead from './NewLead';

class Leads extends Component {
    getLeads = () => {
        fetch(LEADS_API)
            .then(response => response.json())
            .then(data => console.log("leads:", data))
            .catch(console.log);
    }
    componentDidMount() {
        this.getLeads()
    }
    render(){
        return(
            <>
                Hello World 

                <NewLead reload = {this.getLeads}/>
            </>
        )
    }
}


export default Leads;