import logo from './logo.svg';
import './App.css';
import React, {lazy, Suspense} from 'react';
import ClickExample from './click-example-state/ClickExample';
import IframeExample from './click-example-state/IframeExample';
import FocusTextRef from './click-example-state/FocusTextRef';
//import Parent from './click-example-state/FocusWithClassRef';
import ErrorBoundry from './errorhandling/ErrorBoundry';
import RouterFun from './routing/RouterFun';

import Greeting from './proptype/Greeting';
import FocusWithClassRef from './click-example-state/FocusWithClassRef';
import MemoExample from './prevent-re-rendering/MemoExample';
import Parent from './context/context-example';
//import MyComp from './lazy-load/MyComp';

const MyComp = lazy(() => import('./lazy-load/MyComp'))
function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        {/* <ClickExample></ClickExample>
        <IframeExample></IframeExample>
        <FocusTextRef></FocusTextRef> */}
        
        <RouterFun></RouterFun>
        <br>
        </br>
        
        <FocusWithClassRef></FocusWithClassRef>
        {/* <Greeting></Greeting> */}
        <MemoExample></MemoExample>
        <Suspense fallback={<div>Loading......</div>}>
        <MyComp></MyComp>
        </Suspense>
        <Parent></Parent>
      </ErrorBoundry>
    </div>
  );
}

export default App;
