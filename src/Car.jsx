import  { Component } from 'react';

class Car extends Component {
    render() { 
        return (
            <p>the model of car is {this.props.moudel} and the color is {this.props.color}</p>
        );
    }
}
 
export default Car;