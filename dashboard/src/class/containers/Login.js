import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleLogin(event) {
        this.props.history.push('/dashboard');
    }

    handleLoginWithOAuth2(event) {
        console.log("Log in with OAuth2 !");
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-center">
                    <h1 className="h1">DASHBOARD</h1>
                    <div className="login-card">
                        <form className="login-form" value={this.state.value} onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" type="text" name="username" id="username" placeholder="Enter your Username" value={this.state.username} onChange={this.handleChangeUsername} required minLength={4}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" type="password" name="password" id="password" placeholder="Enter your Password" value={this.state.password} onChange={this.handleChangePassword} required minLength={4}/>
                            </div>
                            <input type="submit" name="login" className="btn  btn-custom" value="Login" />
                        </form>
                        <div className="bottom-card">
                            <Link to={{pathname: "/register"}} className="a">Create new account</Link>
                            <button className="btn btn-custom" onClick={this.handleLoginWithOAuth2}>Login with OAuth2</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);