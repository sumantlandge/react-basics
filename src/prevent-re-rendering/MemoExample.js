import React, { Component } from 'react';
import FunctionalComp from './FunctionalComp';
import PureComponentExample from './PureComponentExample';

export default class MemoExample extends Component{
    constructor(props){
        super(props)
        this.state = {
            val: 're rendering example'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({val: 're rendering example'})
        }, 3000);
    }

    render(){
        return(<div>
            <div>memo example <FunctionalComp val={this.state.val}></FunctionalComp></div>
            
            <div>pure component <PureComponentExample val={this.state.val}></PureComponentExample></div>
        </div>);
    }
}