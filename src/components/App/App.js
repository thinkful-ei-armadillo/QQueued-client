import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Landing from '../../Routes/LandingRoute'
import Login from '../../Routes/LoginRoute'
import Registration from '../../Routes/RegistrationRoute'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header></header>
        <main role='main'>
          <Switch>
            <Route exact path={'/'} component={Landing}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/register'} component={Registration}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
