import React from 'react'
class ClickCountClass extends React.Component {
    constructor() {
        super();
        
        this.state = { count: 0 };
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick =() => {
        //this.setState((state, props) => ({ count: state.count + 1 }))
        //this.setState(() => ({ count: this.state.count + 1 }))
        this.setState({count:this.state.count+1});
    }
    render() {
        return (
            <div>
                {this.state.count}
                <br></br>
                {/* <button onClick={() => {this.handleClick}}>addOne classCount</button> */}
                <button onClick={this.handleClick}>addOne classCount</button>
            </div>
        );
    }
}
export default ClickCountClass;

// function NonDefault(){

//     return(<h1>non Default</h1>)
// }

// export {NonDefault};