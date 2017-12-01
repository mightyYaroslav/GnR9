import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import {TextValidator} from 'react-material-ui-form-validator'
import { ValidatorForm } from 'react-form-validator-core'
import Auth from '../modules/Auth'
import {Divider, Snackbar} from 'material-ui'
import Username from './FormFields/User/Username'
import Password from './FormFields/User/Password'

export default withRouter(class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClose() {
        this.setState({ serverError: null })
    }

    handleSubmit() {
        fetch('/user/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.error) {
                    this.setState({serverError: JSON.stringify(json.error) })
                } else {
                    Auth.authenticate(json.token, json.user)
                    this.props.history.push('/albums')
                }
            })
            .catch(err => this.setState({ serverError: JSON.stringify(err) }))
    }

    render() {
        return (
            <div>
            <ValidatorForm
                onSubmit={this.handleSubmit}
            >
                <Username
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <Divider />
                <Password
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <Divider />
                <RaisedButton type='submit' label='Log in' primary/>
            </ValidatorForm>
                <Snackbar
                    open={!!this.state.serverError}
                    message={this.state.serverError || ''}
                    autoHideDuration={4000}
                    onRequestClose={this.handleClose}
                />
            </div>
        )
    }
})