import React from "react";

export default class FocusTextRef extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input autoFocus type="text" ></input>
             
            </div>
        )
            ;
    }
}