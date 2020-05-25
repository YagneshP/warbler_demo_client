import React, { Component } from "react";
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if (this.props.isAuthenticate === false) {
                this.props.history.push("/signin");
            }
        }
        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticate === false) {
                this.props.history.push("/signin");
            }
        }
        render() {
            return <ComponentToBeRendered{...this.props} />;
        }

    }
    function mapStateToProps(state) {
        return {
            isAuthenticate: state.currentUser.isAuthenticate
        };

    }
    return connect(mapStateToProps)(Authenticate);
}



