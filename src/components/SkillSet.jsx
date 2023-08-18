import React from "react";
import angular from "../assets/images/skills/angular.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import css from "../assets/images/skills/css.png";
import git from "../assets/images/skills/git.png";
import html from "../assets/images/skills/html.png";
import javascript from "../assets/images/skills/javascript.png";
import jquery from "../assets/images/skills/jquery.png";
import mui from "../assets/images/skills/mui.png";
import nodejs from "../assets/images/skills/nodejs.png";
import npm from "../assets/images/skills/npm.png";
import photoshop from "../assets/images/skills/photoshop.png";
import premier_pro from "../assets/images/skills/premier-pro.png";
import react from "../assets/images/skills/react.png";
import redux from "../assets/images/skills/redux.png";
import rn from "../assets/images/skills/rn.png";
import sass from "../assets/images/skills/sass.png";
import social_logins from "../assets/images/skills/social-logins.png";
import typescript from "../assets/images/skills/typescript.png";
import mysql from "../assets/images/skills/mysql.png";
import sequelize from "../assets/images/skills/sequelize.png";
import mongodb from "../assets/images/skills/mongodb.svg";
import wordpress from "../assets/images/skills/wordpress.avif";
import firebaase from "../assets/images/skills/firebase.webp";
import Slider from "react-slick";

export default function SkillSet() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
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
    { img: react, title: "React" },
    { img: angular, title: "Angular" },
    { img: mui, title: "MUI" },
    { img: git, title: "GIT" },
    { img: nodejs, title: "NodeJS" },
    { img: mysql, title: "MySQL" },
    { img: sequelize, title: "Sequelize" },
    { img: mongodb, title: "MongoDB" },
    { img: wordpress, title: "Wordpress" },
    { img: html, title: "HTML" },
    { img: css, title: "CSS" },
    { img: javascript, title: "JavaScript" },
    { img: bootstrap, title: "Bootstrap" },
    { img: jquery, title: "jQuery" },
    { img: firebaase, title: "Firebase" },
    { img: npm, title: "NPM" },
    { img: photoshop, title: "Photoshop" },
    { img: premier_pro, title: "Premier Pro" },
    { img: redux, title: "Redux" },
    { img: social_logins, title: "Social Logins" },
    { img: typescript, title: "Typescript" },
    { img: sass, title: "Sass" },
    { img: rn, title: "React Native" },
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
