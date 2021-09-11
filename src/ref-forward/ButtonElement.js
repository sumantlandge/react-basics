import React from 'react';

const ButtonElement = React.forwardRef((props, ref) => (
    <button ref = {ref}>{props.children}</button>
));

const ref = React.createRef();
<ButtonElement ref={ref}></ButtonElement>