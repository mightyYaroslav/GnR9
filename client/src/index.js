import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    cyan500, cyan700, darkBlack, fullBlack, grey100, grey300, grey400, grey500, grey800, pinkA200,
    white
} from 'material-ui/styles/colors'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import injectTapEventPlugin from 'react-tap-event-plugin'

import './sass/index.sass'
import Routes from './routes'

// injectTapEventPlugin()

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey800,
        primary2Color: grey500,
        primary3Color: grey400
    }
})

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Routes/>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)