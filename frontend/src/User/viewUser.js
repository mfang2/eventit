import React, { Component } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import uimage from '../images/user.png';
import api from '../api'
import { connect } from "react-redux";
import Event from '../Events'
import MessageHandler from '../Message/messageHandler'
class ViewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.id,
            userData: undefined,
            isError: false,
            errorMessage: ''
        }
    }
    async componentWillMount() {
        try {
            if (this.props.id) {
                var url = await api.get(`eventit/user/profile/${this.props.id}`);
                this.setState({
                    userData: url.data
                });
            }
        } catch (e) {
            this.setState({ isError: true, errorMessage: e });
            return
        }


    }
    async componentDidMount() {

    }
    render() {
        var error = null;
        if (this.state.isError) {
            error = <MessageHandler message={{ isError: this.state.isError, message: this.state.errorMessage }} />
        }
        else if (!this.state.isError && this.state.errorMessage !== '') {
            error = <MessageHandler message={{ isError: this.state.isError, message: this.state.errorMessage }} />
        }
        else {
            error = null
        }
        let body = null;
        let eventModule = null;
        if (this.props.id !== null && this.state.userData !== undefined) {
            eventModule = <Event userId={this.props.id} />
            body = (<div className="container">

                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-5">
                        <div className="well profile">
                            <div className="">
                                <img src={uimage} className="clsUserImage" alt="user-profile" />
                                <div className=" clsUserData col-xs-12 col-sm-8">

                                    <h2>{this.state.userData.name}</h2>
                                    <p><strong>Email: </strong> {this.state.userData.user_name} </p>
                                    <p><strong>Phone: </strong> {this.state.userData.phone}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-lg-6">
                        <div>
                            <h2>
                                My Events
                        </h2>
                        </div>
                        {eventModule}
                    </div>
                </div>

            </div>)
                ;

        }
        else {
            body = (<div>
                <p>
                    Please <Link to="/login">Login</Link> or <Link to="/signup">Create an Account</Link>Create an Account to perform this action
                </p>
            </div>);
        }
        return (<div className="globalContainer">
            {error}
            {body}
        </div>);
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.authentication.id
    };
}
export default connect(mapStateToProps)(ViewUser);