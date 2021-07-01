import React from "react";
import {Accordion, Card, Button, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const Question = ({id, question, answer}) => {
  return (
    // <Col className="question">
    // <Accordion.Item eventKey="0" className="question">
    //   <Accordion.Header>{question}</Accordion.Header>
    //   <Accordion.Body>{answer}</Accordion.Body>
    // </Accordion.Item>
    <>
      <Card>
        <Card.Header className="row">
          <Col md={10}>
            <h6>{question}</h6>
          </Col>
          <Col md={2}>
            <Accordion.Toggle as={Button} eventKey="0" style={{float: "right"}}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </Accordion.Toggle>
          </Col>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
    // </Col>
  );
};

export default Question;
