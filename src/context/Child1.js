import React, {useContext} from 'react'
import LnameContext from './LnameContext';
export default function Child1(){
    const lName = useContext(LnameContext);
    return(<div>
        Child1 {lName}
    </div>);
}