import React from 'react';

var FunctionalComp = (props) => {
    console.log('val =', props.val);
    return(<div>{props.val}</div>)
}

export default React.memo(FunctionalComp);