import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Tabs, Tab} from 'material-ui/Tabs'
import Login from '../components/login'
import Register from '../components/register'
import NavBar from '../components/NavBar'
import Auth from '../modules/Auth'
import {withRouter} from 'react-router-dom'
import background from '../res/images/bg.jpg'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default withRouter(class Home extends Component {
    render() {
        return (
            <div style={{
                content: "",
                position: 'absolute',
                background: `url(${background}) fixed, fixed`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover'
            }}>
                <NavBar/>
                {Auth.isAuthenticated() &&
                <div style={{ padding: '40vh 0', textAlign: 'center' }}>
                    <h1>Welcome to G N'R Albums site!</h1>
                    <RaisedButton
                        label='Go to albums'
                        onClick={() => this.props.history.push('/albums')}
                    />
                </div>
                }
                {!Auth.isAuthenticated() &&
                <Tabs>
                    <Tab label="Login">
                        <Login/>
                    </Tab>
                    <Tab label="Register">
                        <Register/>
                    </Tab>
                </Tabs>
                }
            </div>
        )
    }
})