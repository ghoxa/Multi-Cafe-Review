import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from './../../config/page-route.jsx';

class Content extends React.Component{
    render(){
        return(
            <Switch>
                {routes.map((route, index) =>(
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        );
    }
}

export default Content;