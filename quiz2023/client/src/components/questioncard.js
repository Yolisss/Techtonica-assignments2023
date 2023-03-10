import Answer from "./answer";

const QuestionCard = (props) => {
  return (
    <div className={"question-section"}>
      <div className="question-text">{props.question.question}</div>
      <div className="answer-section">
        <Answer
          correct={props.question.correct_answer}
          incorrect={props.question.incorrect_answers}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
