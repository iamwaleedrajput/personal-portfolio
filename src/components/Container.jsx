import React, { Fragment, useState } from "react";
import { Col, Row } from "reactstrap";
import ProfileHead from "./ProfileHead";
import ProfileTabs from "./ProfileTabs";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import Projects from "./Projects";
import axios from "axios";

export default function Container() {
  const [currentTab, setCurrentTab] = useState(0);
  const [sendingMail, setSendingMail] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const API_PATH = `${window.location.origin}/waleedbinhameed/contact-us.php`;
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSendingMail(true);
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: values,
    }).then((result) => {
      console.log(result);
      setCurrentTab(0);
      setSendingMail(false);
      setValues({ name: "", email: "", subject: "", phone: "", message: "" });
    });
    setSendingMail(false).catch((error) => setSendingMail(false));
  };
  return (
    <Fragment>
      <Row className="m-0">
        <Col md="1"></Col>
        <Col md="10">
          <div className="body-container">
            <ProfileHead />
            <ProfileTabs
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            {currentTab === 0 ? <AboutMe /> : ""}
            {currentTab === 1 ? <Projects /> : ""}
            {currentTab === 2 ? (
              <ContactForm
                handleFormSubmit={handleFormSubmit}
                handleChange={handleChange}
                values={values}
                sendingMail={sendingMail}
              />
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
