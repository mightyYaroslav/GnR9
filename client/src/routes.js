import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './containers/home'
import Login from './components/login'
import Register from './components/register'
import Profile from './containers/profile'
import Album from './containers/album'
import Albums from './containers/albums'
import Add from './containers/add'

import Auth from './modules/Auth'

class AuthRoute extends Route {
    render() {
        if(this.props.check())
            return <Route path={this.props.path} component={this.props.component} />
        else
            return <Redirect to={{ pathname: '/' }} />
    }
}

class LogoutRoute extends Route {
    render() {
        Auth.deauthenticate()
        return <Redirect to={{ pathname: '/' }} />
    }
}

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <LogoutRoute path='/logout' />
                <AuthRoute path='/profile' check={Auth.isAdmin} component={Profile}/>
                <AuthRoute path='/album/:id' check={Auth.isAuthenticated} component={Album}/>
                <AuthRoute path='/albums' check={Auth.isAuthenticated} component={Albums}/>
                <AuthRoute path='/add' check={Auth.isAdmin} component={Add}/>
            </Switch>
        )
    }
}