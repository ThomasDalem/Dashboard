import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {GoogleLogin} from 'react-google-login';

import {setUser, setToken, removeUser} from '../reducers/userActionCreators';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            log_error: false,

        };

        this.handleLogin = this.handleLogin.bind(this);
        this.googleResponseOnFailure = this.googleResponseOnFailure.bind(this);
        this.googleResponseOnSuccess = this.googleResponseOnSuccess.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentWillMount() {
        this.props.removeUser();
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    async handleLogin(event) {
        event.preventDefault();
        const {username, password} = this.state;
        await axios.post("http://localhost:4200/user/login", {username: username, password: password}).then((response) => {
            if (response.status === 200 && response.statusText === "OK")
                for (let key in response.data)
                    if (key === "token") {
                        let user = {username: this.state.username};
                        this.props.setUser(user);
                        this.props.setToken(response.data[key]);
                        this.props.history.push('/dashboard');
                    }
        }).catch((error) => {
            this.setState({log_error: true});
        });
    }

    async googleResponseOnSuccess(res) {
        this.setState({username: res.profileObj.email, password: res.profileObj.googleId});
        const {username, password} = this.state;
        await axios.post("http://localhost:4200/user/login", {username: username, password: password}).then((response) => {
            if (response.status === 200 && response.statusText === "OK")
                for (let key in response.data)
                    if (key === "token") {
                        let user = {username: this.state.username};
                        this.props.setUser(user);
                        this.props.setToken(response.data[key]);
                        this.props.history.push('/dashboard');
                    }
        }).catch(async (error) => {
            await axios.post("http://localhost:4200/user/register", {username: username, password: password}).then((response) => {
                if (response.status === 200 && response.statusText === "OK")
                    for (let key in response.data)
                        if (key === "token") {
                            let user = {username: this.state.username};
                            this.props.setUser(user);
                            this.props.setToken(response.data[key]);
                            this.props.history.push('/dashboard');
                        }
            }).catch((error) => console.log(error));
        });
    };

    googleResponseOnFailure(res) {
        console.log("Connection fail !");
    };

    render() {
        return (
            <div className="login-page">
                <div className="login-center">
                    <h1 className="h1">DASHBOARD</h1>
                    <div className="login-card">
                        {
                            this.state.log_error === true
                            ? <div className="log-error">Username or Password invalid.</div>
                            : null
                        }
                        <form className="login-form" value={this.state.value} onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" type="text" name="username" id="username" placeholder="Enter your Username" value={this.state.username} onChange={this.handleChangeUsername}  required minLength={4}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" type="password" name="password" id="password" placeholder="Enter your Password" value={this.state.password} onChange={this.handleChangePassword}  required minLength={4}/>
                            </div>
                            <input type="submit" name="login" className="btn  btn-custom" value="Login" />
                        </form>
                        <div className="bottom-card">
                            <Link to={{pathname: "/register"}} className="a">Create new account</Link>
                            <GoogleLogin
                                clientId="131598559484-1oqpjof5et6t9o3iuqvplv5etul788hc.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={this.googleResponseOnSuccess}
                                onFailure={this.googleResponseOnFailure}
                                cookiePolicy={'single_host_origin'}
                                className="btn btn-custom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    setUser,
    setToken,
    removeUser,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));