//************************************************************************
//     I M P O R T S                  
//************************************************************************
import * as types from '../actions/types';

//************************************************************************
//     Q U I Z   R E D U C E R
//************************************************************************
const initialState = {
  questionStage: 0,
  playerScore: 0,
  answerArray: [
    {
      question: 1,
      answer: '',
    },
    {
      question: 2,
      answer: '',
    },
    {
      question: 3,
      answer: '',
    },
    {
      question: 4,
      answer: '',
    },
    {
      question: 5,
      answer: '',
    },
    {
      question: 6,
      answer: '',
    },
    {
      question: 7,
      answer: '',
    },
    {
      question: 8,
      answer: '',
    },
    {
      question: 9,
      answer: '',
    },
  ],
};

export default function quiz(state = initialState, action) {
  switch(action.type) {
    case types.PROGRESS_QUIZ: {
      return Object.assign({}, state, {
        questionStage: state.questionStage += 1,
      });
    }
    case types.DEGRESS_QUIZ: {
      return Object.assign({}, state, {
        questionStage: state.questionStage - 1,
      });
    }
    case types.RESET_QUIZ: {
      return Object.assign({}, state, {
        questionStage: 0,
      });
    }
    case types.INCREASE_PLAYER_SCORE: {
      return Object.assign({}, state, {
        playerScore: playerscore + 1,
      });
    }
    case types.ADD_ANSWER: {
      return Object.assign({}, state, {
        answerArray: state.answerArray.map( (answer) => {
          if(answer.question === action.questionNumber) {
            return Object.assign({}, answer, {
              answer: action.answer,
            });
          }

          return answer;
        })
      });
    }
    default: {
      return state;
    }
  };
};