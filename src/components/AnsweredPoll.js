import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Progress, Card, CardText, CardTitle, Badge } from 'reactstrap'

class AnsweredPoll extends Component {

  answerPercentage (optionText) {
    const { question, users } = this.props
    let numberOfVotesForOption = question.optionOneText === optionText ? 
            question.optionOne.votes.length : question.optionTwo.votes.length
    let numberOfVotes = Object.keys(users).length;    
    return (numberOfVotesForOption / numberOfVotes * 100).toFixed(2);
  }

  render () {
    const { question, users } = this.props
    const { optionOneText, optionTwoText, id, optionOneAnswered } = question
    return (
      <div>        
        <div>Results : </div>
          <Card body className="text-left mt-4">
            <CardTitle>
              { optionOneText } 
              { optionOneAnswered && <Badge className="float-right" color="success" pill>Your Answer!</Badge> }
            </CardTitle>
            <Progress striped color="info" value={this.answerPercentage(id, optionOneText)} max="100">
                {this.answerPercentage(id, optionOneText)}
            </Progress>
            <CardText className="text-center">{question.optionOne.votes.length} out of {Object.keys(users).length}</CardText>        
          </Card>
        
          <Card body className="text-left mt-4">
            <CardTitle>
              { optionTwoText }
              { !optionOneAnswered && <Badge className="float-right" color="success" pill>Your Answer!</Badge> }
            </CardTitle>
            <Progress striped color="info" value={this.answerPercentage(id, optionTwoText)} max="100">
                {this.answerPercentage(id, optionTwoText)}
            </Progress>
            <CardText className="text-center">{question.optionTwo.votes.length} out of {Object.keys(users).length}</CardText>        
          </Card>                        
      </div>
    );
  }
}

function mapStateToProps({ users }, ownProps) {      
    return {      
      question : ownProps.question,
      users
    }
  }

export default connect(mapStateToProps)(AnsweredPoll);
