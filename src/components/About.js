import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../utils/timeline";
import CustomNav from "./NavBar";

const About = () => {
    return (
        <>
            <CustomNav />
            <Container className="mt-2 mr-lg-5" fluid>
                <Row xs={1} md={2}>
                    <Col className="mb-3">
                        <Timeline />
                    </Col>
                    <Col className="px-lg-5 mb-2">
                        <div className="px-lg-5 about-text text-justify">
                            <p className="about-me-block">About</p>
                            <p>
                                A Full Stack Developer .
                                Have an interest in learning new technologies and always open to new directions of programming.
                            </p>
                            <p>
                                I'm Murari reddy T, I Graduated from R V college of engineering. I am a person who has a passion in Techologies.
                                I have been coding for around 6 months now.I look back to those days where it all begans from black screen to beautiful websites and Web applications now a days and that's how far i have grown now.I love to create font end applications using react  perferably.I have a dream to master all the Technologies and to be the best developer in the world and now I am working toward it!.
                                Have the desire to learn and develop something new, as well as adhere to the rule
                                "Good code is beautiful code" and try to follow all standards of the modern development process.
                            </p>
                        </div>
                        <div className="text-center mt-5">
                            <img src="static/images/programmer.svg" alt="programmer" className="programmer" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default About;
