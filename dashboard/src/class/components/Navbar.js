import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
    componentWillMount() {
        console.log(this.props.user.username);
    }

    render() {
        return (
            <aside className="nav-bar" id="nav-bar">
                <div className="nav-list">
                    <div className="username">{this.props.user.username}</div>
                    <Link to={{pathname: "/dashboard"}} className="nav-link">
                        <div className="nav-icon">
                            <box-icon name="grid-alt" color="white" size="lg"></box-icon>
                        </div>
                        <span className="nav-name">Dashboard</span>
                    </Link>
                    <Link to={{pathname: "/dashboard/widgets"}} className="nav-link">
                        <div className="nav-icon">
                            <box-icon name="layer-plus" color="white" size="lg"></box-icon>
                        </div>
                        <span className="nav-name">Widgets</span>
                    </Link>
                    <Link to={{pathname: "/"}} className="nav-link">
                        <div className="nav-icon">
                            <box-icon name="log-out" color="white" size="md"></box-icon>
                        </div>
                        <span className="nav-name">Logout</span>
                    </Link>
                </div>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(Navbar));
