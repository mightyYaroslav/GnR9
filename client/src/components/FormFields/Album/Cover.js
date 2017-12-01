import React, {Component} from 'react'

export default class Cover extends Component {
    render() {
        return (
            <input type="file" accept="image/*" name="cover" required/>
        )
    }
}