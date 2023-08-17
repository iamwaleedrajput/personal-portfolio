import React from "react";
import { aboutMe } from "./utils";
import SkillSet from "./SkillSet";

export default function AboutMe() {
  return (
    <div className="container mt-4">
      <h5>About</h5>
      <p className="about-me">{aboutMe}</p>
      <SkillSet />
    </div>
  );
}
