import React, {Component} from 'react'
import Auth from '../modules/Auth'
import {
    AutoComplete, Dialog, GridList, GridTile, IconButton, LinearProgress, Snackbar, Subheader,
    TextField
} from 'material-ui'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/action/delete'
import {withRouter} from 'react-router-dom'
import NavBar from '../components/NavBar'
import DeleteModal from '../components/DeleteModal'
import background from '../res/images/bg.jpg'

const style = {
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
}

export default withRouter(class Albums extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTitle: '',
            albums: [],
            dataSource: [],
            dialogOpen: false,
            loading: true
        }
        this.handleClose = this.handleClose.bind(this)
        this.removeAlbum = this.removeAlbum.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentDidMount() {
        fetch('/albums/all', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${Auth.getToken()}`
            },
            body: JSON.stringify({
                searchTitle: this.state.searchTitle
            })
        })
            .then(res => {
                if(res.status === 200)
                    return res.json()
                else
                    this.setState({ serverError: res.statusText, loading: false })
            })
            .then(json => {
                if(json.error)
                    this.setState({ serverError: JSON.stringify(json.error), loading: false })
                else
                    this.setState({ albums: json.albums, loading: false })
            })
            .catch(err => this.setState({ serverError: err, loading: false }))
    }

    removeAlbum(id) {
        fetch('/albums/delete', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${Auth.getToken()}`
            },
            body: JSON.stringify({ id })
        })
            .then(res => {
                if(res.status === 200)
                    return res.json()
                else
                    this.setState({ serverError: res.statusText})
            })
            .then(json => {
                if (json.error) {
                    this.setState({serverError: json.error})
                } else {
                    const albums = this.state.albums.filter(album => album.id !== id)
                    this.setState({ albums })
                }

            })
    }

    handleClose() {
        this.setState({ serverError: null })
    }

    handleSearch(value) {
        this.setState({
            dataSource: this.state.albums.filter(album => album.title.toLowerCase().includes(value.toLowerCase())).map(album => album.title)
        })
    }

    handleDelete() {

    }

    handleCancel() {

    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.loading &&
                <LinearProgress/>
                }
                {!this.state.loading &&
                <div>
                    <AutoComplete
                        hintText='Search by title'
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleSearch}
                        fullWidth={true}
                    />
                    <DeleteModal
                        open={this.state.dialogOpen}
                        onDelete={this.handleDelete}
                        onCancel={this.handleCancel}
                    />

                    {Auth.isAdmin() &&
                        <FloatingActionButton
                            style={style}
                            zDepth={2}
                            onClick={() => this.props.history.push('/add')}
                        >
                            <ContentAdd/>
                        </FloatingActionButton>
                    }
                    <GridList
                        cellHeight={180}
                    >
                        <Subheader>Guns N' Roses Albums</Subheader>
                        {/*<TextField>*/}
                            {/*hintText="Search"*/}
                            {/*fullWidth={true}*/}
                        {/*</TextField>*/}
                        {this.state.albums.map(album => (
                            <GridTile
                                key={album.id}
                                title={album.title}
                                onClick={(e) => this.props.history.push('/album/' + album.id)}
                                actionIcon={Auth.isAdmin() &&
                                <IconButton
                                    onClick={() => this.removeAlbum(album.id) }
                                >
                                    <ContentRemove color="white" />
                                </IconButton>
                                }
                            >
                                <img src={`data:image;base64,${Buffer.from(album.image).toString('base64')}`} />
                            </GridTile>
                        ))}
                    </GridList>
                    <Snackbar
                        open={!!this.state.serverError}
                        message={this.state.serverError || ''}
                        autoHideDuration={4000}
                        onRequestClose={this.handleClose}
                    />
                </div>
                }
            </div>
        )
    }
})