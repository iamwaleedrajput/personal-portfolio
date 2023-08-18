import classNames from "classnames";
import React from "react";
import { Col, Row } from "reactstrap";
import dealeradmin from "../assets/images/posters/dealeradmin-poster.png";
import dealermart from "../assets/images/posters/dealermart-poster.png";
import eventive from "../assets/images/posters/eventive-poster.png";
import ezone from "../assets/images/posters/ezone-poster.png";
import socialwing from "../assets/images/posters/socialwing-poster.png";

export default function Projects() {
  const projectsList = [
    {
      title: "My Social Wing",
      description: `My social wing is a fully functional web app made for social media
        management. System is fully made up form scratch by using ReactJS
        (JavaScript framework) and Django (Python framework). In this app
        you can connect your social media pages and accounts e.g.
        facebook, instagram, twitter. You can publish any post on multiple
        platform on a single click.`,
      sub_description: `We use facebook apis to connect user's facebook pages to create
        post, Instagram apis to connect instagram business account to
        create post, Twitter apis to connect user's personal account to
        create post.`,
      img: socialwing,
    },
    {
      title: "DealerAdmin",
      description: ` DealerAdmin.io is a fully functional web app made for car
      insurance company based in USA. System is fully made up form
      scratch by using ReactJS (JavaScript framework) and Django (Python
        framework). In this app we integrated Stripe and Dwolla payment
        gateways, and manage the full overall record of claims, agreements
        and payments.`,
      url: "https://stagging.dealeradmin.io/",
      url_name: "DealerAdmin.io",
      sub_description: `If you want live demo feel free to contact me.`,
      img: dealeradmin,
    },
    {
      title: "Dealermart",
      description: `Dealermart is a fully functional CRM system made for car dealers based in USA. System is fully made up form scratch by using ReactJS (JavaScript framework) and Django (Python framework). We integrated KANBAN as well in it.`,
      url: "https://stagging.dealeradmin.io/",
      url_name: "Dealermart",
      sub_description: `If you want live demo feel free to contact me.`,
      img: dealermart,
    },
    {
      title: "Dealermart.com",
      description: `Dealermart is a fully functional automotive marketplace for individual in USA. System is fully made up form scratch by using ReactJS (JavaScript framework) and Django (Python framework).`,
      url: "https://stagging.dealeradmin.io/",
      url_name: "Dealermart.com",
      sub_description: `If you want live demo feel free to contact me.`,
      img: dealermart,
    },
    {
      title: "Ezone",
      description: `Ezone is a fully functional ecommerce platform. System is fully made up form scratch by using ReactJS (JavaScript framework) and Django (Python framework). Ezone is a multi vendor ecommerce platform works as a middleware between wholeseller and dropshippers.`,
      url: "https://stagging.dealeradmin.io/",
      url_name: "Ezone",
      sub_description: `If you want live demo feel free to contact me.`,
      img: ezone,
    },
    {
      title: "Eventive",
      description: `Eventive experience is a website made for event management company to show their clients about their work and book orders. Made on HTML5, CSS3, JavaScript, Bootstrap, PHP. If ypu need demo for this website feel free to contact me.`,

      sub_description: `Responsive design made from scratch, multiple video play, background video implemented, multiple carousel integrated, responsive gallery integrated, email service integrated using PHP.`,
      img: eventive,
    },
  ];
  return (
    <div className="container projects-container">
      {projectsList.map((item, index) => (
        <Row
          key={index}
          className={classNames({ "flex-row-reverse": index % 2 === 1 })}
        >
          <Col md="7">
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            {item.url ? (
              <p>
                <a href={item.url}>{item.url_name}</a>
              </p>
            ) : (
              ""
            )}
            <p>{item.sub_description}</p>
          </Col>
          <Col md="5">
            <img className="img-fluid" src={item.img} alt="" />
          </Col>
        </Row>
      ))}
    </div>
  );
}
