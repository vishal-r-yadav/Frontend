import React from "react";
import axios from "axios";
import withRouter from "./withRouter";

class GetPolicy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            policy : null
        }
    }
    componentDidMount(){
      console.log(this.props);
        axios.get("http://localhost:8080/healthinsurance-policy/policy/"+this.props.params.policyId).then(resp => this.setState({
            policy: resp.data
        }

        ))
    }
    render(){
       
        return(
        <div className="container">
        <h2>Policy Details</h2>
       
            {this.state.policy!==null &&
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Policy Id</th>
                  <th>Policy Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Term</th>
                  <th>Price</th>
                  <th>Created By</th>
                </tr>
              </thead>
              <tbody>
             
                <tr>
                  <td>{this.state.policy.policyId}</td>
                  <td>{this.state.policy.policyName}</td>
                  <td>{this.state.policy.startDate}</td>
                  <td>{this.state.policy.endDate}</td>
                  <td>{this.state.policy.term}</td>
                  <td>{this.state.policy.price}</td>
                  <td>{this.state.policy.createdBy}</td>
                  
               
                </tr>
                
              </tbody>
            </table>
          
            }  
        </div>
        )
    }

}
export default withRouter(GetPolicy);