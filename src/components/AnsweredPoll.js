import React, { Component } from 'react';
import { Progress, Card, CardText, CardTitle, Badge } from 'reactstrap'

class AnsweredPoll extends Component {

  answerPercentage (optionText) {
    const { question } = this.props
    let numberOfVotesForOption = question.optionOneText === optionText ? 
            question.optionOne.votes.length : question.optionTwo.votes.length
    let numberOfVotes = question.totalVotesCount;    
    return (numberOfVotesForOption / numberOfVotes * 100).toFixed(2);
  }

  render () {
    const { question } = this.props
    const { optionOneText, optionTwoText, id, optionOneAnswered, totalVotesCount } = question
    return (
      <div>        
        <div>Results : </div>
          <Card body className="text-left mt-4">
            <CardTitle>
              { optionOneText } 
              { optionOneAnswered && <Badge className="float-right" color="success" pill>Your Answer!</Badge> }
            </CardTitle>
            <Progress striped color="info" value={this.answerPercentage(optionOneText)} max="100">
                {this.answerPercentage(optionOneText)}
            </Progress>
            <CardText className="text-center">{question.optionOne.votes.length} out of {totalVotesCount}</CardText>        
          </Card>
        
          <Card body className="text-left mt-4">
            <CardTitle>
              { optionTwoText }
              { !optionOneAnswered && <Badge className="float-right" color="success" pill>Your Answer!</Badge> }
            </CardTitle>
            <Progress striped color="info" value={this.answerPercentage(optionTwoText)} max="100">
                {this.answerPercentage(optionTwoText)}
            </Progress>
            <CardText className="text-center">{question.optionTwo.votes.length} out of {totalVotesCount}</CardText>        
          </Card>                        
      </div>
    );
  }
}

export default AnsweredPoll;
