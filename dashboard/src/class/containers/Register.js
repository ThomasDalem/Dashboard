import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {setUser, setToken} from '../reducers/userActionCreators';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {username, password} = this.state;
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
    }

    render() {
        return (
            <div className="register-page">
                <div className="register-center">
                    <h1 className="h1">DASHBOARD</h1>
                    <div className="back-card">
                        <Link to={{pathname: "/"}} className="back-btn">
                            <box-icon size="md" name="left-arrow-alt" color="white"></box-icon>
                        </Link>
                        <div className="register-card">
                            <form className="register-form" value={this.state.value} onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control" type="text" name="username" id="username" placeholder="Enter your Username" value={this.state.username} onChange={this.handleChangeUsername} required minLength={4}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" type="password" name="password" id="password" placeholder="Enter your Password" value={this.state.password} onChange={this.handleChangePassword} required minLength={4}/>
                                </div>
                                <input type="submit" name="register" className="btn  btn-custom" value="register"/>
                            </form>
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
    setToken
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Register));