import React, {Component} from 'react'
import Auth from '../modules/Auth'
import {TextValidator} from 'react-material-ui-form-validator'
import { ValidatorForm } from 'react-form-validator-core'
import {Divider, RaisedButton, Snackbar} from 'material-ui'
import Username from './FormFields/User/Username'
import Password from './FormFields/User/Password'
import Email from './FormFields/User/Email'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('passwordsMatch', value =>
            value === this.state.password2
        )
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
        fetch('/user/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.error) {
                    this.setState({ serverError: JSON.stringify(json.error) })
                } else {
                    login()
                }
            })
            .catch(err => this.setState({ serverError: JSON.stringify(err) }))
    }

    login() {
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
                    <Email
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Divider />
                    <Password
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <Divider />
                    <TextValidator
                        hintText='Repeat password'
                        floatingLabelText='password again'
                        type='password'
                        name='password2'
                        value={this.state.password2}
                        underlineShow={false}
                        onChange={this.handleChange}
                        validators={['required', 'passwordsMatch']}
                        errorMessages={['This field is required', 'Passwords should match']}
                    />
                    <Divider />
                    <RaisedButton type='submit' label='Register' primary/>
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
}