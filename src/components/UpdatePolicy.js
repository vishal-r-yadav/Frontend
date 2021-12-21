import React from 'react';
import withRouter from './withRouter';
import axios from 'axios';

class UpdateProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            policyId:'',
            policyName:'',
            startDate : '',
            endDate: '',
            term : '',
            price: '',
            createdBy: '',
            
        }
    }

    componentDidMount() {
      axios.get("http://localhost:8080/healthinsurance-policy/policy/"+this.props.params.policyId).then(resp=>this.setState({
          policyId:resp.data.policyId,
        policyName:resp.data.policyName,
        startDate : resp.data.startDate,
        endDate: resp.data.endDate,
        term : resp.data.term,
        price: resp.data.price,
        createdBy: resp.data.createdBy,
      }))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleUpdate = (event) => {

        let payload = {
       
               
                policyId: this.state.policyId,
                policyName: this.state.policyName,
                startDate: this.state.startDate,
                 endDate:this.state.endDate,
                 term: this.state.term,
                 price:this.state.price,
                 createdBy: this.state.createdBy
           
        }

        axios.put("http://localhost:8080/healthinsurance-policy/updatepolicy",payload).then(resp=>alert("Policy updated Successfully"))
    }


    render() {
        return(
            <div>
            <h3>Update Policy</h3>
            <div>
                    <label>Policy Id</label>
                    <input type="text" name="policyId" id="policyId" onChange={this.handleChange} value={this.state.policyId} disabled/>
            </div> 
            <div>
                    <label>Policy Name</label>
                    <input type="text" name="policyName" id="policyName" onChange={this.handleChange} value={this.state.policyName} />
            </div> 
            <div>
                    <label>Start Date</label>
                    <input type="date" name="startDate" id="startDate" onChange={this.handleChange} value={this.state.startDate} />
            </div> 
            <div>
                    <label>End Date </label>
                    <input type="date" name="endDate" id="endDate" onChange={this.handleChange} value={this.state.endDate} />
            </div> 
            <div>
                    <label>term</label>
                    <input type="text" name="term" id="term" onChange={this.handleChange} value={this.state.term} />
            </div> 
            <div>
                    <label>Price</label>
                    <input type="text" name="price" id="price" onChange={this.handleChange} value={this.state.price} />
            </div> 
            <div>
                    <label>Created By</label>
                    <input type="text" name="createdBy" id="createdBy" onChange={this.handleChange} value={this.state.createdBy} />
            </div> 
            <div>
                <button onClick={this.handleUpdate}>Update</button>
            </div>

        </div>
        )       
    }
}

export default withRouter(UpdateProduct);