import React, {Component} from 'react'
import {DatePicker} from 'material-ui'

export default class ReleaseDate extends Component {
    render() {
        return (
            <DatePicker
                hintText="Pick a date"
                name="release_date"
                fullWidth={true}
                {...this.props}
            />
        )
    }
}