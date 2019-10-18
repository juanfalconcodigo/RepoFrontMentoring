import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { LoginContainer } from '../features/auth';
import { RoutingHome } from '../features/home';
import { RegisterContainer } from '../features/register';
/* import { HomeContainer } from '../features/home'; */


function RoutingRoot(){

    return(
      <Router>
          <Switch>
              <Route path='/login' component={LoginContainer}/>         
              <Route  path='/register' component={RegisterContainer}/>
              <Route  path='/home' component={RoutingHome}/>
              <Redirect from='**'  to='/login'/>
          </Switch>
      </Router>
    )
}
export {
    RoutingRoot 
}