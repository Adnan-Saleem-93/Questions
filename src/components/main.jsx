import React from "react";
import {Row, Col} from "react-bootstrap";
import QuestionsList from "./questionsList";

const Main = () => {
  return (
    <Row className="main">
      <Col lg={4} sm={4}>
        <h5>Questions and Answers about GitHub</h5>
      </Col>
      <Col lg={8} sm={8}>
        <QuestionsList />
      </Col>
    </Row>
  );
};

export default Main;
