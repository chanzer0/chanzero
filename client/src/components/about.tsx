import React, { ReactElement } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import Header from "./navbar";

const About = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      <Header />
      <Col sm={12}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={3}>
            <Card>
              <div style={{ position: "relative" }}>
                <CardImg
                  top
                  style={{ position: "relative" }}
                  src="cornered-stairs.svg"
                  width="100%"
                  height="auto"
                />
                <img className="double-border" src="toad.png" alt="toad" />
              </div>
              <CardBody className="pt-6">
                <h2 className="text-muted">About</h2>
                <CardText>
                  My name is Sean, I'm 23 and I'm a full stack Web3 developer.
                  I've been in the crypto space since 2018 and the specific
                  subset of NFTs since January of 2021. I've worked and
                  developed
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm={9}>
            <Card style={{ height: "25rem" }}></Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default About;
