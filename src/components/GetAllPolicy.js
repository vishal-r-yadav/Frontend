import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class GetAllPolicy extends React.Component {
    constructor() {
        super();
        this.state = {
            policies: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/healthinsurance-policy/policy/all").then(resp => this.setState({
            policies: resp.data
        }

        ))

    }
    render() {
        return (
            <div className="container">
                <h2>All Policies</h2>
               
                    
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
                      {this.state.policies.map(p =>
                        <tr>
                          <td>{p.policyId}</td>
                          <td>{p.policyName}</td>
                          <td>{p.startDate}</td>
                          <td>{p.endDate}</td>
                          <td>{p.term}</td>
                          <td>{p.price}</td>
                          <td>{p.createdBy}</td>
                          <td><Link to = {`/policy/details/${p.policyId}`}>View</Link></td>
                          <td><Link to = {`/policy/update/${p.policyId}`}>Update</Link></td>
                          <td><Link to = {`/policy/delete/${p.policyId}`}>Delete</Link></td>
                       
                        </tr>
                         )}
                      </tbody>
                    </table>
                  
               
            </div>
        )
    }
}
export default GetAllPolicy;