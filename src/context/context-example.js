import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import LnameContext from './LnameContext';

export default function Parent(){
    return(<div>
        <LnameContext.Provider value="parentLname">
        <Child1></Child1>
        <Child2></Child2>
        </LnameContext.Provider>
    </div>);
}

