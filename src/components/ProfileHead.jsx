import React, { Fragment } from "react";
import cover from "../assets/images/cover.jpeg";
import profile from "../assets/images/profile.jpg";
import { designation, firstName, lastName, middleName } from "./utils";

export default function ProfileHead() {
  return (
    <Fragment>
      <div className="profile-cover">
        <img src={cover} alt="" />
      </div>
      <div className="profile-picture">
        <img src={profile} alt="" />
        <h3>
          {firstName} {middleName} {lastName}
        </h3>
        <h6>{designation}</h6>
      </div>
    </Fragment>
  );
}
