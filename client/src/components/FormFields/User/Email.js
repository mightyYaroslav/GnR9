import React, {Component} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'

export default class Email extends Component {
    render() {
        return (
            <TextValidator
                hintText='Enter email'
                floatingLabelText='email'
                name='email'
                underlineShow={false}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'This field should be a valid email']}
                {...this.props}
            />
        )
    }
}