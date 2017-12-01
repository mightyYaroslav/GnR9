import React, {Component} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'

export default class Username extends Component {
    render() {
        return (
            <TextValidator
                hintText='Enter username'
                floatingLabelText='username'
                name='username'
                underlineShow={false}
                validators={['required']}
                errorMessages={['This field is required']}
                {...this.props}
            />
        )
    }
}