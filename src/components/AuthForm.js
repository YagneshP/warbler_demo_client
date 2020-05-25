import React, { Component } from "react";
import PropTypes from "prop-types";
import errors from "../store/reducers/errors";
class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props
            .onAuth(authType, this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(() => {
                return;
            });
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp, errors, history, removeError } = this.props;
        history.listen(() => { removeError(); });
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (
                                <div className="alert alert-danger">{errors.message}</div>
                            )}
                            <label htmlFor="email">Email</label>
                            <input
                                autoComplete="off"
                                className="form-control"
                                id="email"
                                name="email"
                                type="text"
                                onChange={this.handleChange}
                                value={email} />

                            <label htmlFor="password">Password</label>
                            <input
                                autoComplete="off"
                                className="form-control"
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            {signUp && (
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control"
                                        autoComplete="off"
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={username}
                                    />

                                    <label htmlFor="image-url">ImageUrl</label>
                                    <input
                                        autoComplete="off"
                                        className="form-control"
                                        id="image-url"
                                        name="profileImageUrl"
                                        value={profileImageUrl}
                                        type="text"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary btn-block btn-lg">
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AuthForm.propTypes = {
    buttonText: PropTypes.string,
    errors: PropTypes.object,
    heading: PropTypes.string,
    history: PropTypes.object,
    onAuth: PropTypes.func,
    signUp: PropTypes.bool,
    removeError: PropTypes.func
}

export default AuthForm;