import React from "react";
class RegisterationForm extends React.Component{
    constructor(){
        super();
        this.state = {
            fname : '',
            lname : '',
            email : '',
            mobile : ''
        }
    }
    handleChange = (event)=>{
        this.setState({[event.target.name]:
        event.target.value})
    }
    handlesubmit = () => {
        alert("hello"+this.state.fname+"Registeration success");
    }
    render(){
        return(
            <form>
            <div>
            <label>Enter First Name</label>
            <input type = "text" name="fname" id="fname" onChange={this.handleChange} value = {this.state.fname}/>
            </div>
            <div>
            <label>Enter Last Name</label>
            <input type = "text" name="lname" id="lname" onChange={this.handleChange} value = {this.state.lname}/>
            </div>
            <div>
            <label>Enter Email Id</label>
            <input type = "text" name="email" id="email" onChange={this.handleChange} value = {this.state.email}/>
            </div>
            <div>
            <label>Enter Mobile No</label>
            <input type = "text" name="mobile" id="mobile" onChange={this.handleChange} value = {this.state.mobile}/>
            </div>
            <div><button onClick={this.handlesubmit}>Register</button></div>
            </form>
        )

    }
}
export default RegisterationForm;