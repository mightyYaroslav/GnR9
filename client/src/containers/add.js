import React, {Component} from 'react'
import {ValidatorForm} from 'react-form-validator-core'
import {withRouter} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Title from '../components/FormFields/Album/Title'
import Description from '../components/FormFields/Album/Description'
import Rating from '../components/FormFields/Album/Rating'
import ReleaseDate from '../components/FormFields/Album/ReleaseDate'
import Cover from '../components/FormFields/Album/Cover'
import {RaisedButton, Snackbar} from 'material-ui'
import Auth from '../modules/Auth'

export default withRouter(class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            rating: 0,
            release_date: '',
            cover: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit() {
        fetch('/albums/add', {
            method: 'post',
            headers: {
                'Authorization': `bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(this.state)
        })
            .then(res => {
                if(res.status === 200)
                    this.props.history.push('/albums')
                else
                    this.setState({ serverError: res.statusText })
            })
    }

    handleFile({ file }) {
        console.log('lol')
        this.setState({ cover: file })
    }

    handleClose() {
        this.setState({ serverError: null })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <ValidatorForm
                    onSubmit={this.handleSubmit}
                >
                    <Title
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <Description
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <Rating
                        value={this.state.rating}
                        onChange={this.handleChange}
                    />
                    <ReleaseDate/>
                    <Cover
                        onChange={this.handleFile}
                    />
                    <RaisedButton type='submit' label='Add'/>
                </ValidatorForm>
                <Snackbar
                    open={!!this.state.serverError}
                    message={this.state.serverError || ''}
                    autoHideDuration={4000}
                    onRequestClose={this.handleClose}
                />
            </div>
        )
    }
})