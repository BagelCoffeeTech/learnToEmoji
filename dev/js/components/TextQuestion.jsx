//************************************************************************
//                                    M O D U L E     I M P O R T S
//************************************************************************
import React from 'react';
import { connect } from 'react-redux';

import Input from './Input.jsx';
import Button from './Button.jsx';
//************************************************************************
//                                  C O M P O N E N T
//************************************************************************
const TextQuestion = (props) => {
  const { details, questionNumber, onClick } = props;

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
          <textArea 
            
          />
        </form>
        <Button 
          type="submit"
          text="Final Answer!"
          onClick={onClick}
        />
      </section>
    );
}
//************************************************************************
//                              E X P O R T
//************************************************************************
export default connect(null)(TextQuestion);