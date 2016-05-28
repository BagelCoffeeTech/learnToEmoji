import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  progressQuiz,
  degressQuiz,
  resetQuiz,
} from '../actions/quiz-actions';

import questions from '../../questions';

import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion.jsx';
import Button from '../components/Button.jsx';
import LandingPage from '../components/LandingPage.jsx';

export class App extends Component {
  constructor(props) {
    super(props);

    this.renderPage = this.renderPage.bind(this);
  }

  renderPage(questionsObject) {
    if (this.props.questionStage === 0) {
      console.log('render landing page');
      return <LandingPage onClick={this.props.progressQuiz} />
    } else if (this.props.questionStage > 0 && this.props.questionStage < 4) {
      const currentQuestion = questionsObject[`question${this.props.questionStage}`];
      return (
        <MultipleChoiceQuestion
          details={currentQuestion}
          questionNumber={this.props.questionStage}
        />
      );
    } else if (this.props.questionStage >= 4) {
      console.log('render text questions');
    }

    return null;
  }

  render() {
    return (
      <section>
        {this.renderPage(questions)}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionStage: state.quiz.questionStage,
  };
}

function dispatchStateToProps(dispatch) {
  return bindActionCreators({
    progressQuiz,
    degressQuiz,
    resetQuiz,
  }, dispatch);
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
