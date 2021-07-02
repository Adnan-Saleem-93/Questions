import React from "react";
import {questions} from "../utils/constants";
import Question from "./question";
import {Accordion} from "react-bootstrap";

const QuestionsList = () => {
  const renderList = () => {
    return questions.map((question, index) => {
      return <Question key={index} {...question} />;
    });
  };

  return <Accordion>{renderList()}</Accordion>;
};

export default QuestionsList;
