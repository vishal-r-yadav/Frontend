import React from 'react';
import axios from 'axios';
import withRouter from './withRouter';

class DeletePolicy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            policy: null
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/healthinsurance-policy/policy/"+this.props.params.policyId).then(resp => this.setState({
            policy: resp.data
        }));
    }

    deletePolicy  = () => {
        axios.delete("http://localhost:8080/healthinsurance-policy/deletepolicy/"+this.props.params.policyId).then(resp=>alert("Policy deleted Successfully"));
    }

    render() {
        return(
            <div>
                {
                this.state.policy !== null &&
                 <div>
                   <h3>Policy Name: {this.state.policy.name}</h3>
                   <button onClick={this.deletePolicy}>Delete</button>
                 </div>                
                }               
            </div>
        )
    }
}

export default withRouter(DeletePolicy);