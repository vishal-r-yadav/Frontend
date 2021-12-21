import React from 'react';
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.square = this.square.bind(this);
    }
    increment(){
        this.setState({
            counter : this.state.counter+1
        })
    }
    decrement(){
        this.setState({
            counter : this.state.counter-1
        })
    }
    square(){
        this.setState({
            counter : this.state.counter*this.state.counter
        })
    }
    render(){
        return (
            <div>
            <h3>Counter Components</h3>
            <p style={{color: "red"}}>Counter value : {this.state.counter}</p>
            <button onClick={this.increment}>+</button> &nbsp;
            <button onClick = {this.decrement}>-</button>  &nbsp; &nbsp;
            <button onClick = {this.square}>Square</button>
            </div>
        )
    }

}
export default Counter