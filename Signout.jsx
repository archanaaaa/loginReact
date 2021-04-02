import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { setCookie } from "../utils/cookies";

class Signout extends Component {
  state = {};
  render() {
    setCookie("token", "", 1);
    return <Redirect to="/" />;
  }
}

export default Signout;
