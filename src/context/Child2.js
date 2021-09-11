import React, { useContext } from 'react'
import LnameContext from './LnameContext';
export default function Child2(props){
    const lName = useContext(LnameContext)
    return(
    <div>
        Child2 {lName}
    </div>);
}