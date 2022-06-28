import React from "react";
import CustomNav from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { projectsList } from "../utils/helperList";
import { Button } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const Projects = () => {
  // console.log(skillsList);
  return (
    <>
      <CustomNav />
      <Container className="mt-6 ">
        <h1 className="color-custom-blue ml-lg-5 proj-slide "> Projects </h1>
        {projectsList.map(proj => (
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} key={proj.label}>
            <Col>
              <img className="img-fluid proj-image shadow" src={proj.imgSrc} alt={proj.label} loading="lazy" />
            </Col>
            <Col className="pt-1">
              <h3 className="font-weight-bold color-custom-blue mb-1">{proj.label}</h3><br />
              {proj.description && <>
                <span>{proj.description}</span><br /> <br />
              </>}


              <Row>
                <Col className="mb-3">
                  <a href={proj.visit} target="_blank" rel="noopener noreferrer" className="project-github-link"><Button
                    itemProp="codeRepository"
                    variant="contained"
                    color="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<GitHubIcon />}
                    size="small"

                  >
                    SOURCE CODE
                  </Button></a>
                </Col>
                <Col className="mb-3">
                  <a href={proj.src} target="_blank" rel="noopener noreferrer" className="project-site-link"><Button
                    itemProp="codeRepository"
                    variant="contained"
                    color="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon />}
                    size="small"

                  >
                    LIVE PROJECT
                  </Button></a>
                </Col>
              </Row>

              <div className="mt-2">
                {
                  proj.stack.map(obj => {
                    return (
                      <img src={obj.src} alt="tools" style={{ width: '30px', height: '30px', margin: '2px 4px' }} />
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
};

export default Projects;
