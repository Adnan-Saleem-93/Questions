import React, {useState} from "react";
import {questions} from "../utils/constants";

const QuestionsList = () => {
  const [list, setList] = useState(questions);

  const renderList = () => {};

  return <>{renderList()}</>;
};

export default QuestionsList;
