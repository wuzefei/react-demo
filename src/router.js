import React from 'react';
import {Route, Switch,} from 'react-router-dom'
import Login from './containers/login'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import User from './containers/user'
import Depart from './containers/depart'
import Menus from './containers/menus'
import Role from './containers/role'


export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Home>
            <Switch>
                <Route exact path="/home" component={Dashboard}/>
                <Route exact path="/user" component={User}/>
                <Route exact path="/depart" component={Depart}/>
                <Route exact path="/menus" component={Menus}/>
                <Route exact path="/role" component={Role}/>
            </Switch>
        </Home>
    </Switch>
)
