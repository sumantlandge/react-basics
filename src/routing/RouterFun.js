import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import ClickCountClass from '../click-example-state/ClickCountClass';
import ClickCountHook from '../click-example-state/ClickCountHook';
import IframeExample from '../click-example-state/IframeExample';
import ChildPropsEx from '../props-example/ChildPropsEx';
import Tabledata from '../table/Tabledata';

function RouterFun() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {/* <li><Link to="/">Home</Link></li> */}
                        <li><Link to="/fun-count">Function Counter</Link></li>
                        <li><Link to="/class-count">Class Counter</Link></li>
                        <li><Link to="/iframe-view">Iframe</Link></li>
                        <li><Link to="/child-prop">Child Prop</Link></li>
                        <li><Link to="/table-display">Table Display</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/fun-count">
                        <ClickCountHook></ClickCountHook>
                    </Route>
                    <Route path="/class-count">
                        <ClickCountClass></ClickCountClass>
                    </Route>
                    <Route path="/iframe-view">
                        <IframeExample></IframeExample>
                    </Route>
                    <Route path="/child-prop" >
                        <ChildPropsEx></ChildPropsEx>
                    </Route>
                    <Route path="/table-display">
                        <Tabledata></Tabledata>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default RouterFun;