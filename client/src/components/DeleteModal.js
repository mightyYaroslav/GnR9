import React, {Component} from 'react'
import {Dialog, FlatButton} from 'material-ui'

export default class DeleteModal extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.onCancel}
            />,
            <FlatButton
                label="Delete"
                onClick={this.props.onDelete}
            />
        ]

        return (
            <Dialog
                title="Are you sure?"
                actions={actions}
                modal={true}
                open={this.props.open}
            >
               Are you sure you want to delete this item?
            </Dialog>
        )
    }
}