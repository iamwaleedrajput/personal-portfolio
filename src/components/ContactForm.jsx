import { TextField } from "@mui/material";
import React from "react";
import { ImLinkedin, ImNpm, ImGithub } from "react-icons/im";
import { Col, Row, FormGroup } from "reactstrap";
export default function ContactForm() {
  const contactMethods = [
    {
      icon: ImLinkedin,
      title: "LinkedIn",
      id: "linkedin-tab",
      navigateTo: "https://www.linkedin.com/in/waleedrajputofficial/",
    },
    {
      icon: ImNpm,
      title: "NPM",
      id: "npm-tab",
      navigateTo: "https://www.npmjs.com/~iamwaleedrajput",
    },
    {
      icon: ImGithub,
      title: "GitHub",
      id: "github-tab",
      navigateTo: "https://github.com/iamwaleedrajput",
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        {contactMethods.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              href={item.navigateTo}
              target="blank"
              key={index}
              className={`contact-us-links ${item.id}`}
            >
              <div className="icon">
                <Icon size={25} />
              </div>
              <p>{item.title}</p>
            </a>
          );
        })}
      </div>
      <div className="mt-4 pb-3">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Name"
                    fullWidth
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Subject"
                    fullWidth
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Email"
                    fullWidth
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <TextField
                    multiline
                    rows={5}
                    size="small"
                    variant="outlined"
                    label="Details"
                    fullWidth
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
