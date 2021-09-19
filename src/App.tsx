import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/store';

import Login from '@pages/Login/Login';
import Game from '@pages/Game/Game';
import Score from '@pages/Score/Score';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>
            <Route exact path="/score">
              <Score />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
