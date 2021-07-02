import React from "react";
import {Row, Col} from "react-bootstrap";
import QuestionsList from "./questionsList";

const Main = () => {
  return (
    <Row className="main">
      <Col md={3}>
        <h3>Questions and Answers about GitHub</h3>
      </Col>
      <Col md={9}>
        <QuestionsList />
      </Col>
    </Row>
  );
};

export default Main;
