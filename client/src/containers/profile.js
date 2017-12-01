import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import Auth from '../modules/Auth'
import {
    LinearProgress, Snackbar, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from 'material-ui'

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            profiles: []
        }
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        fetch('/profiles', {
            method: 'post',
            headers: {
                'Authorization': `bearer ${Auth.getToken()}`
            }
        })
            .then(res => {
                if(res.status === 200)
                    return res.json()
                else
                    this.setState({ serverError: res.statusText, loading: false })
            })
            .then(json => {
                if(json.error) {
                    this.setState({ serverError: json.error, loading: false})
                } else {
                    this.setState({ profiles: json.users, loading: false })
                }
            })
    }

    handleClose() {
        this.setState({ serverError: null })
    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.loading &&
                <LinearProgress/>
                }
                {!this.state.loading &&
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>id</TableHeaderColumn>
                        <TableHeaderColumn>username</TableHeaderColumn>
                        <TableHeaderColumn>role</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {this.state.profiles.map(profile => (
                        <TableRow
                            key={profile.id}
                        >
                            <TableRowColumn>{profile.id}</TableRowColumn>
                            <TableRowColumn>{profile.username}</TableRowColumn>
                            <TableRowColumn>{profile.role}</TableRowColumn>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                }
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