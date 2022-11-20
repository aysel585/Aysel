import React, { Component } from "react";
import PersonalInfo from "./personalinfo";
import Experience from "./experience";
import Contacs from "./contact";

class UserCV extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <Experience />
        <Contacs />
      </>
    );
  }
}
export default UserCV;
