import React from 'react';
import axios from 'axios';
class Loginform extends React.Component{  constructor(){
    super();
    this.state = {
        username : '',
        password : '',
        role : '',
        email : '',
        mobile : '',
        salary : '',
        dateofbirth : ''
    }
}
handleChange = (event)=>{
    this.setState({[event.target.name]:
    event.target.value})
}
handlesubmit = () => {
    const payload = {
        userName : this.state.username,
        password : this.state.password,
        role : this.state.role,
        email : this.state.email,
        mobileNo :this.state.mobile,
        salary : this.state.salary,
        dateOfBirth : this.state.dateofbirth,
    }
    axios.post("http://localhost:8080/healthinsurance-login/addnewuser",payload).then(resp=>
    alert("User saved with id"+resp.data.userId));
}
render(){
    return(
       <div>
        <div>
        <label>Enter UserName</label>
        <input type = "text" name="username" id="username" onChange={this.handleChange} value = {this.state.username}/>
        </div>
        <div>
        <label>Enter Password</label>
        <input type = "text" name="password" id="password" onChange={this.handleChange} value = {this.state.password}/>
        </div>
        <div>
        <label>Enter Role</label>
        <input type = "text" name="role" id="role" onChange={this.handleChange} value = {this.state.role}/>
        </div>
        <div>
        <label>Enter Email Id</label>
        <input type = "text" name="email" id="email" onChange={this.handleChange} value = {this.state.email}/>
        </div>
        <div>
        <label>Enter Mobile No</label>
        <input type = "text" name="mobile" id="mobile" onChange={this.handleChange} value = {this.state.mobile}/>
        </div>
        <div>
        <label>Enter Salary</label>
        <input type = "text" name="salary" id="salary" onChange={this.handleChange} value = {this.state.salary}/>
        </div>
        <div>
        <label>Enter Date Of Birth</label>
        <input type = "date" name="dateofbirth" id="dateofbirth" onChange={this.handleChange} value = {this.state.dateofbirth}/>
        </div>
        
        <div><button onClick={this.handlesubmit}>Login</button></div>
        </div>
    )

}
}
export default Loginform;



