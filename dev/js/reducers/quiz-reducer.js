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
};

export default function quiz(state = initialState, action) {
  switch(action.type) {
    case types.PROGRESS_QUIZ: {
      return Object.assign({}, state, {
        questionStage: state.questionStage + 1,
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
    default: {
      return state;
    }
  };
};