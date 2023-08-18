import { Button, TextField } from "@mui/material";
import React from "react";
import { ImLinkedin, ImNpm, ImGithub, ImWhatsapp } from "react-icons/im";
import { Col, Row, FormGroup, Form, Spinner } from "reactstrap";
import { whatsappNumber } from "./utils";
export default function ContactForm({
  handleFormSubmit,
  handleChange,
  values,
  sendingMail,
}) {
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
    {
      icon: ImWhatsapp,
      title: "WhatsApp",
      id: "whatsapp-tab",
      navigateTo: `https://wa.me/${whatsappNumber}`,
    },
  ];
  return (
    <div>
      <div className=" mt-4">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Row className="m-0">
              {contactMethods.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Col>
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
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
      <div className="mt-4 pb-3">
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Row className="m-0">
                <Col md={6}>
                  <FormGroup>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="Name"
                      fullWidth
                      onChange={handleChange("name")}
                      value={values.name}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="Phone"
                      fullWidth
                      onChange={handleChange("phone")}
                      value={values.phone}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="Email"
                      fullWidth
                      onChange={handleChange("email")}
                      value={values.email}
                      required
                      type="email"
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
                      onChange={handleChange("subject")}
                      value={values.subject}
                      required
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
                      label="Message"
                      fullWidth
                      onChange={handleChange("message")}
                      value={values.message}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={12} className="text-end">
                  <FormGroup>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={sendingMail}
                      //   onClick={(e) => handleFormSubmit(e)}
                    >
                      Submit {sendingMail ? <Spinner size="sm" /> : ""}
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
