//import { useState } from "react";
import React, {useEffect, useState} from 'react';
const ClickCountHook =() => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`
    });
    return(
        <div>
            {count}
            <br></br>
            <button color="blue" onClick={() => setCount(count+1)}>addOne hookCount</button>
        </div>
    );

}

export default ClickCountHook;