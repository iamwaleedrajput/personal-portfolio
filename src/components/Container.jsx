import React, { Fragment, useState } from "react";
import { Col, Row } from "reactstrap";
import ProfileHead from "./ProfileHead";
import ProfileTabs from "./ProfileTabs";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";

export default function Container() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Fragment>
      <div className="container ">
        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <div className="body-container">
              <ProfileHead />
              <ProfileTabs
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
              {currentTab === 0 ? <AboutMe /> : ""}
              {currentTab === 1 ? <ContactForm /> : ""}
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
