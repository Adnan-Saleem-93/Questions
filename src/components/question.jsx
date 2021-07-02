import React from "react";
import {Accordion, Card, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const Question = ({id, question, answer}) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col md={10}>
              <h6>{question}</h6>
            </Col>
            <Col md={2}>
              <Accordion.Toggle eventKey={id}>
                <FontAwesomeIcon icon={faPlusCircle} />
              </Accordion.Toggle>
            </Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey={id}>
          <Card.Body>{answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default Question;
