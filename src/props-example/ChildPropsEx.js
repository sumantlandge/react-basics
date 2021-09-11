import React from 'react';
//import PropTypes from 'prop-types'
function Button(props){
    const {kind, ...other} = props;
    return(
        <div>
    <h1>{kind}</h1>
    <h1>{props.children}</h1>
    <div>This is valid HTML &amp; JSX at the same time.</div>
    </div>
    );
    
}

// Button.propTypes = {
//     kind: PropTypes.string
// }

Button.defaultProps = {
    kind:"stranger"
}

function ChildPropsEx(){
return(<div>
    <Button kind="abcd">inside button</Button>
    <Button>inside button</Button>
</div>)
}

export default ChildPropsEx;