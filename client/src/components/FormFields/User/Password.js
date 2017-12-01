import React, {Component} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import { ValidatorForm } from 'react-form-validator-core'

export default class Password extends Component {

    componentDidMount() {
        ValidatorForm.addValidationRule('isValidPassword', value =>
            value.length >= 5 && /\d+/.test(value)
        )
    }

    render() {
        return (
            <TextValidator
                hintText='Enter password'
                floatingLabelText='password'
                type='password'
                name='password'
                underlineShow={false}
                validators={['required', 'isValidPassword']}
                errorMessages={['This field is required', 'Password should contain more than 5 characters and minimum one digit']}
                {...this.props}
            />
        )
    }
}