import React, {Component} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import { ValidatorForm } from 'react-form-validator-core'

export default class Description extends Component {

    render() {
        return (
            <TextValidator
                hintText='Enter description'
                floatingLabelText='Description'
                type='text'
                name='description'
                fullWidth={true}
                validators={['required']}
                errorMessages={['This field is required']}
                {...this.props}
            />
        )
    }
}