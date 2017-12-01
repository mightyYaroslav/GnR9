import React, {Component} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import { ValidatorForm } from 'react-form-validator-core'
import {TextField} from 'material-ui'

export default class Rating extends Component {

    render() {
        return (
            <TextField
                hintText='Enter rating'
                floatingLabelText='rating'
                type='number'
                name='rating'
                fullWidth={true}
                {...this.props}
            />
        )
    }
}