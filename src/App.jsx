import React,{Component} from 'react';
import { RoutingRoot } from './routes';
import { Provider } from 'react-redux';
import {store,saveState} from './store';


class App extends Component{
    componentDidMount(){
        window.addEventListener('unload',saveState);
    }
    render(){
        return (
            <Provider store={store}>
                <RoutingRoot />
            </Provider>
    
        );
    }
}




/* function App() {
    return (
        <Provider store={store}>
            <RoutingRoot />
        </Provider>

    );
}
 */
export { App};
