import React from "react";
import CustomNav from "./NavBar";
import { Container, Button, Row, Col, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { contactDetails } from "../utils/helperList";
import ContactSvg from "../utils/contact";

const Contact = () => {
  return (
    <>
      <CustomNav />
      <Container className="pt-lg-1">
        <Row className="mt-3 mt-lg-4 mb-3">
          <Col xs={12} md={9}>
            <CardDeck className="contact">
              {contactDetails.map(obj => (
                <Card className="contact-card" key={obj.type}>
                  <a href={obj.href} className="text-link" target="_blank" rel="noreferrer">
                    <div className="shadow d-flex justify-content-center text-center flex-column py-3">
                      <div>
                        <img className="contact-img " src={obj.iconSrc} alt={obj.type} loading="lazy" />
                      </div>
                      <span className="text-muted mt-2 mb-3">{obj.type}</span>
                    </div>
                  </a>
                </Card>
              ))}
            </CardDeck>
          </Col>
          <Col className="float-md-right text-right">
            <h2 className="pr-lg-5 pr-xs-3 text-boldest color-custom-blue mb-4">
              Lets <br />Work <br /> Together!
            </h2>
            <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
              <Button className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1">
                <FontAwesomeIcon  spin size="1x" icon={faPhoneAlt} /><span><a href="tel:+919591983109" className="text-link">9591983109</a></span>
              </Button>
              <Button className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1 px-2" onClick={() => window.open('mailto:murarireddy108@gmail.com?subject="Hello !"', '_blank')}>
                <FontAwesomeIcon spin size="1x" icon={faEnvelope} /><span>murarireddy108@gmail.com</span>
              </Button>
              <Button className="contact-btns bg-custom-blue shadow border-0 py-1" onClick={() => window.open('https://linkedin.com/in/murari-reddy-bab708165/', '_blank')}>
                <FontAwesomeIcon  spin size="1x" icon={faLinkedinIn} /><span>Linkedin </span>
              </Button>
            </div>
          </Col>
        </Row>
        <ContactSvg />
      </Container>
    </>
  )
};

export default Contact;
