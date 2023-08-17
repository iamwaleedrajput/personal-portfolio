import React from "react";
import angular from "../assets/images/angular.png";
import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css.png";
import git from "../assets/images/git.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.png";
import jquery from "../assets/images/jquery.png";
import mui from "../assets/images/mui.png";
import nodejs from "../assets/images/nodejs.png";
import npm from "../assets/images/npm.png";
import photoshop from "../assets/images/photoshop.png";
import premier_pro from "../assets/images/premier-pro.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import rn from "../assets/images/rn.png";
import sass from "../assets/images/sass.png";
import social_logins from "../assets/images/social-logins.png";
import typescript from "../assets/images/typescript.png";
import Slider from "react-slick";

export default function SkillSet() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const skills = [
    { img: angular, title: "Angular" },
    { img: bootstrap, title: "Bootstrap" },
    { img: css, title: "CSS" },
    { img: git, title: "GIT" },
    { img: html, title: "HTML" },
    { img: javascript, title: "JavaScript" },
    { img: jquery, title: "jQuery" },
    { img: mui, title: "MUI" },
    { img: nodejs, title: "NodeJS" },
    { img: npm, title: "NPM" },
    { img: photoshop, title: "Photoshop" },
    { img: premier_pro, title: "Premier Pro" },
    { img: react, title: "React" },
    { img: redux, title: "Redux" },
    { img: rn, title: "React Native" },
    { img: sass, title: "Sass" },
    { img: social_logins, title: "Social Logins" },
    { img: typescript, title: "Typescript" },
  ];
  return (
    <div className="skill-set">
      <Slider {...settings}>
        {skills.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <h6>{item.title}</h6>
          </div>
        ))}
      </Slider>
    </div>
  );
}
