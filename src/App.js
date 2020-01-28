import React from 'react';
import { Route, /* Redirect, */ Switch } from 'react-router-dom';
import './App.css';
import MainContainer from './components/MainContainer';
import GameDetailsContainer from './components/GameDetailsContainer';//
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/:page" component={MainContainer} />
          <Route exact path="/game/:gameId" component={GameDetailsContainer} />
          <Route exact path="*" component={ErrorPage} />
      </Switch>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
