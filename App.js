import React from 'react';
import {Provider} from 'mobx-react';

import stores from './src/stores';

import Root from './src/Root';

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Root />
      </Provider>
    );
  }
}
export default App;