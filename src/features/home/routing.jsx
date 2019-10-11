import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { HomeContainer } from './components';
import { PrivateRoute } from '../../routes/private-router';



function RoutingHome(props) {
    const{match:{path}}=props;
    
    return(
        <Switch>
            <PrivateRoute path={`${path}`}  component={HomeContainer}/>
            

            
        </Switch>


    )
    
}

export{
    RoutingHome
}