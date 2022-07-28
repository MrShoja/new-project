import  { Component } from 'react';
// imrc

class Car extends Component {
    render() {  
        return ( 
            <>
            <p>the model of car is {this.props.moudel} and the color is {this.props.color}</p>
            <span> {this.props.children} </span>
            </>
        ); 
    }
}
 
export default Car;