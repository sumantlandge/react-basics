import React, { Component, PureComponent } from 'react';

export default class PureComponentExample extends React.Component{
    constructor(props){
        super(props)
        //this.state.val=props.val;
        this.state = {val: props.val}
    }

    componentDidMount(){
        console.log('componentDidMount called');
        console.log('val =', this.state.val);
    }

    shouldComponentUpdate(nextProp, nextState){
        //return (this.state.val === this.props.val ? false : true);
        console.log('shouldComponentUpdate called');
        return (this.state.val === nextState.val ? false : true);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate called');
        console.log('val =', this.state.val);
    }
    render(){
        console.log('re rendering called');
        return(<div>{this.state.val}</div>)
    }
}