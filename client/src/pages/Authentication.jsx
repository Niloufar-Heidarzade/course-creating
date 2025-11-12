import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Authentication() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex gap-5 justify-content-center">
          <Image alt="aps logo" src="/apsignals.png" width={100} height={60}/>
          <h1>Welcome to APSignals!</h1>
        </Col>
      </Row>
      <Row className="mt-5 mb-5 mx-5">
        <Col>
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;
