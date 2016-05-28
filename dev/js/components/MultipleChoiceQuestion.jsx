//************************************************************************
//                                    M O D U L E     I M P O R T S
//************************************************************************
import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';
//************************************************************************
//                                  C O M P O N E N T
//************************************************************************
const MultipleChoiceQuestion = (props) => {
  const { details, questionNumber, onClick, addAnswer } = props;

  function handleAnswer(e) {
    addAnswer(e.target.value, questionNumber);
    onClick();
  }

  function renderAnswers(answers) {
    return answers.map(answer => {
      return (
        <div key={answer.text} className='radioAnswer'>
          <Input
            type="radio"
            value={answer.text}
            name={`question${questionNumber}`}
            id={answer.text}
            onClick={handleAnswer}
          />
          <label htmlFor={answer.text}>{answer.text}</label>
        </div>
      );
    });
  }

  return (
      <section
        className={`questionArea question${questionNumber}`}
      >
        <p
          className="questionText"
        >
          {details.text}
        </p>
        <form className="answerGroup">
          {renderAnswers(details.answers)}
        </form>
      </section>
    );
}
//************************************************************************
//                              E X P O R T
//************************************************************************
export default MultipleChoiceQuestion;