import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  progressQuiz,
  degressQuiz,
  resetQuiz,
  addAnswer,
} from '../actions/quiz-actions';

import questions from '../../questions';

import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion.jsx';
import Button from '../components/Button.jsx';
import LandingPage from '../components/LandingPage.jsx';
import TextQuestion from '../components/TextQuestion.jsx';

export class App extends Component {
  constructor(props) {
    super(props);

    this.renderPage = this.renderPage.bind(this);
  }

  renderPage(questionsObject) {
    if (this.props.questionStage === 0) {
      return <LandingPage onClick={this.props.progressQuiz} />
    } else if (this.props.questionStage > 0 && this.props.questionStage < 4) {
      const currentQuestion = questionsObject[`question${this.props.questionStage}`];
      return (
        <section>
          <h3>{`Question ${this.props.questionStage}`}</h3>
          <MultipleChoiceQuestion
            details={currentQuestion}
            questionNumber={this.props.questionStage}
            onClick={this.props.progressQuiz}
            addAnswer={this.props.addAnswer}
          />
        </section>
      );
    } else if (this.props.questionStage >= 9) {
      return (
        <h3>donedonedone</h3>
      );
    } else if (this.props.questionStage >= 4) {
      const currentQuestion = questionsObject[`question${this.props.questionStage}`];
      return (
        <section>
          <h3>{`Question ${this.props.questionStage}`}</h3>
          <TextQuestion
            details={currentQuestion}
            questionNumber={this.props.questionStage}
            onClick={this.props.progressQuiz}
            addAnswer={this.props.addAnswer}
          />
        </section>
      )
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
    addAnswer,
  }, dispatch);
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
