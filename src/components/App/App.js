import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from '../../Routes/LandingRoute/LandingRoute'
import Login from '../../Routes/LoginRoute/LoginRoute'
import Registration from '../../Routes/RegistrationRoute/RegistrationRoute'
import Header from '../Header/Header'
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute'
import MessageRoute from '../../Routes/MessageRoute/MessageRoute'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main role='main'>
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Registration} />
            <Route exact path={'/message'} component={MessageRoute}/>

            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
