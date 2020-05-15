import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userAction } from "./../../actions/index";
import Information from "./../information/information";
import Repo from "./../repos/repo";
import Filter from "./../filter/filter";
import Error from "./../error/error";
import "./profile.css";

// Profile component
class Profile extends Component {
    componentDidMount() {
        this.props.onProfileMount(false);
    }
    render() {
        //Redirecting to the homepage if the user object is empty
        return Object.keys(this.props.user).length === 0 ? (
            <Redirect to="/" />
        ) : (
                <>
                    {this.props.userDoesntExist && <Error />}
                    <div id="profile">
                        <Information />
                        <div className="search-repo">
                            <Filter />
                            <Repo />
                        </div>
                    </div>
                </>
            );
    }
}

// passing redux state as props to the component
const mapStateToProps = userAction;

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(Profile)
);
