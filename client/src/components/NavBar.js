import React, {Component} from 'react'
import {AppBar, FlatButton, IconButton, IconMenu, MenuItem} from 'material-ui'
import ActionHome from 'material-ui/svg-icons/action/home'
import Auth from '../modules/Auth'
import Menu from './Menu'
import {withRouter} from 'react-router-dom'

export default withRouter(class NavBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar
                title={Auth.isAuthenticated() ? `You logged in as ${Auth.getUser().username}` : "Guns N' Roses albums"}
                iconElementLeft={<IconButton onClick={() => this.props.history.push('/')}><ActionHome /></IconButton>}
                iconElementRight={<Menu/>}
                style={{
                    margin: 0,
                }}
                {...this.props}
            />
        )
    }
})