import React, {Component} from 'react'
import Auth from '../modules/Auth'
import {
    Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, IconButton, LinearProgress,
    Snackbar
} from 'material-ui'
import NavBar from '../components/NavBar'
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back'
import {withRouter} from 'react-router-dom'

export default withRouter(class Album extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            loading: true
        }
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        fetch(`/albums/all/${this.state.id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${Auth.getToken()}`
            }
        })
            .then(res => {
                if(res.status === 200)
                    return res.json()
                else
                    this.setState({ serverError: res.statusText, loading: false})
            })
            .then(json => {
                console.log(JSON.stringify(json))
                if (json.error) {
                    this.setState({serverError: JSON.stringify(json.error), loading: false})
                } else {
                    const newState = json
                    newState.loading = false
                    console.log(JSON.stringify(newState))
                    this.setState(newState)
                }
            })
    }

    handleClose() {
        this.setState({ serverError: null })
    }

    render() {
        const percentage = window.screen.availWidth > 720 ? '60' : '90'
        return (
            <div>
                <NavBar
                    iconElementLeft={<IconButton onClick={() => this.props.history.push('/albums')}><NavigationBack /></IconButton>}
                />
                {this.state.loading &&
                    <LinearProgress/>
                }
                {!this.state.loading &&
                    <Card style={{
                        position: 'absolute',
                        left: `${Math.floor((100-percentage) / 2)}%`,
                        right: `${Math.floor((100-percentage) / 2)}%`,
                        width: `${percentage}%`
                    }}>
                        <CardHeader
                            title={this.state.title}
                        />
                        <CardMedia>
                            <img src={`data:image;base64,${Buffer.from(this.state.image).toString('base64')}`}/>
                        </CardMedia>
                        <CardTitle title={this.state.title} subtitle={this.state.release_year} />
                        <CardText>
                            {this.state.description}
                        </CardText>
                    </Card>
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
})