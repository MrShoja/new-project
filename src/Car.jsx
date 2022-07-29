import  { Component } from 'react';
// imrc

function Car (props) { 
        return ( 
            <>
            <p>the model of car is {props.moudel} and the color is {props.color}</p>
            <span> {props.children} </span>
            </>
        ); 
}
 
export default Car;