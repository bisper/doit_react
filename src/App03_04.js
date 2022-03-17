import React from 'react';
import StateExample from './03/04/StateExample';
import ForceUpdateExample from './03/04/ForceUpdateExample';

class App extends React.Component {
  render() {
    return (
      <div>
        <StateExample/>
        <br/><hr/><br/>
        <ForceUpdateExample/>
      </div>
    );
  }
}

export default App;