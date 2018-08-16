import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Card, Button, CardHeader, CardBody, Media } from 'reactstrap'
import { formatDate } from '../utils/helpers'

class QuestionDetail extends Component {

  render() {            
    const { question } = this.props
    const { id, name, timestamp, avatar, optionOneText, optionTwoText } = question
    return(         
          <Card>
          <CardHeader>
                  <h4>{name} asks : </h4>
                  <h5>{formatDate(timestamp)}</h5>
          </CardHeader>                                        
          <CardBody>
              <Media>
                  <Media left middle>
                    <Media object src={avatar} height={64} width={64} alt="avatar" className="rounded-circle"/>
                  </Media>
                  <Media body>
                  <Media heading>
                      Would You Rather?
                  </Media>                        
                      <div>{optionOneText}</div>
                      <div>or</div>
                      <div>{optionTwoText}</div> 
                  </Media>
              </Media>                                                
              <Button>View Poll</Button>
          </CardBody>                                        
      </Card>            
    )
}
}

function mapStateToProps({authedUser, users, questions}, ownProps) {
  console.log(ownProps)
  const question = questions[ownProps.match.params.id]
  return {
    authedUser,
    question : formatQuestion(question, users[question.author], authedUser)
  }
}

export default connect(mapStateToProps)(QuestionDetail);
