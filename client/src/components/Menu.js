import React, {Component} from 'react'
import {FlatButton, IconButton, IconMenu, MenuItem} from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Auth from '../modules/Auth'
import {withRouter} from 'react-router-dom'

export default withRouter(class Menu extends Component {
    render() {
        return (
            <div>
                {Auth.isAuthenticated() &&
                <IconMenu
                    iconButtonElement={
                        <IconButton><MoreVertIcon color="white"/></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    {Auth.isAdmin() &&
                    <MenuItem primaryText="Profiles" onClick={() => this.props.history.push('/profile')}/>
                    }
                    <MenuItem primaryText="Log out" onClick={() => this.props.history.push('/logout')}/>
                </IconMenu>
                }
                {!Auth.isAuthenticated() &&
                    <FlatButton label="Login" onClick={() => this.props.history.push('/login')}/>
                }
            </div>
        )
    }
})