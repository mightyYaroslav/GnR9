export default class Auth {

    static authenticate(token, user) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
    }

    static deauthenticate() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    static getRole() {
        return Auth.getUser().role
    }

    static isAuthenticated() {
        return localStorage.getItem('token') !== null
    }

    static isAdmin() {
        return Auth.isAuthenticated() && Auth.getRole() === 'admin'
    }

    static login() {
        fetch('/user/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.error) {
                    this.setState({serverError: JSON.stringify(json.error) })
                } else {
                    Auth.authenticate(json.token, json.user)
                    this.props.history.push('/albums')
                }
            })
            .catch(err => this.setState({ serverError: JSON.stringify(err) }))
    }

    static register(login) {
        fetch('/user/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.error) {
                    this.setState({ serverError: JSON.stringify(json.error) })
                } else {
                    login()
                }
            })
            .catch(err => this.setState({ serverError: JSON.stringify(err) }))
    }

}