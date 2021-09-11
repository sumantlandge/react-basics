import React from 'react'
import ClickCountHook from './ClickCountHook'
import ClickCountClass from './ClickCountClass';

const ClickExample = () => {

    return (
        <div>
            <div>
                <p>StateManagement with Hooks</p>
                <ClickCountHook></ClickCountHook>
            </div>
            <div>
                <p>StateManagement with Class lifecycle</p>
                <ClickCountClass></ClickCountClass>
            </div>
        </div>
    )

}

export default ClickExample;