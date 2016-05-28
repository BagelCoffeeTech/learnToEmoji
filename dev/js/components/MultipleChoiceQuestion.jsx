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
  const { details, questionNumber } = props;

  function renderAnswers(answers) {
    return answers.map(answer => {
      return (
        <div className='radioAnswer'>
          <Input
            type="radio"
            value={answer.text}
            name={answer.text}
          />
          <label>{answer.text}</label>
        </div>
      );
    });
  }

  return (
      <section
        className={`questionArea question${questionNumber}`}
      >
        <h3
          className="questionText"
        >
          {details.text}
        </h3>
        <form className="answerGroup">
          {renderAnswers(details.answers)}
        </form>
        <Button 
          type="submit"
          text="Final Answer!"
        />
      </section>
    );
}
//************************************************************************
//                              E X P O R T
//************************************************************************
export default MultipleChoiceQuestion;