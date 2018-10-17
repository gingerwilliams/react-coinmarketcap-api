import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import NotFound from './NotFound';

class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={App} />
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )

    }
    
}

export default Router;