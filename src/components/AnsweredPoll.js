import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Progress, Col, Row } from 'reactstrap'

class AnsweredPoll extends Component {

  answerPercentage (optionText) {
    const { question, users } = this.props
    let numberOfVotesForOption = question.optionOneText === optionText ? 
            question.optionOne.votes.length : question.optionTwo.votes.length
    let numberOfVotes = Object.keys(users).length;    
    return (numberOfVotesForOption / numberOfVotes * 100).toFixed(2);
  }

  render () {
    const { question, authedUser, users } = this.props
    const { optionOneText, optionTwoText, id } = question
    return (
      <Col>
        <div className="text-center">{ optionOneText }</div>
        <Progress striped color="info" value={this.answerPercentage(id, optionOneText)} max="100">
            {this.answerPercentage(id, 'optionOne')}
        </Progress>
        <div className="text-center">{question.optionOne.votes.length} out of {Object.keys(users).length}</div>
        <div className="text-center">{ optionTwoText }</div>
        <Progress striped color="info" value={this.answerPercentage(id, optionTwoText)} max="100">
            {this.answerPercentage(id, 'optionTwo')}
        </Progress>               
        <div className="text-center">{question.optionTwo.votes.length} out of {Object.keys(users).length}</div>
      </Col>
    );
  }
}

function mapStateToProps({authedUser, users}, ownProps) {      
    return {
      authedUser,
      question : ownProps.question,
      users
    }
  }

export default connect(mapStateToProps)(AnsweredPoll);
