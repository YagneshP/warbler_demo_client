import React from "react";
import { Link } from "react-router-dom";
import MessageTimeLine from "./MessageTimline"

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticate) {
        return (
            <div className="home-hero">
                <h1>What's Happening</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up here
                </Link>
            </div>
        );
    }
    return (
        <div>
            <MessageTimeLine
                profileImageUrl={currentUser.user.profileImageUrl}
                username={currentUser.user.username}
            />
        </div>
    )


};
export default Homepage;