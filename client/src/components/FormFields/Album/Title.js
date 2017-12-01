import React, {Component} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import { ValidatorForm } from 'react-form-validator-core'

export default class Title extends Component {

    render() {
        return (
            <TextValidator
                hintText='Enter title'
                floatingLabelText='Title'
                type='text'
                name='title'
                fullWidth={true}
                validators={['required']}
                errorMessages={['This field is required']}
                {...this.props}
            />
        )
    }
}