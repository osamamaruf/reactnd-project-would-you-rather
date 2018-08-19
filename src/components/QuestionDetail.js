import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Card, Button, CardHeader, CardBody, Media, Label, Input, Form, FormGroup } from 'reactstrap'
import { formatDate } from '../utils/helpers'

class QuestionDetail extends Component {

  handleAnswer= (e, id) => {

  }

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
                  <Media left top>
                    <Media object src={avatar} height={64} width={64} alt="avatar" className="rounded-circle"/>
                  </Media>
                  <Media body>
                    <Form>     
                        <FormGroup tag="fieldset">
                            <legend>Would You Rather?</legend>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="vote" />{' '}
                                {optionOneText}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="vote" />{' '}
                                {optionTwoText}
                                </Label>
                            </FormGroup>                            
                        </FormGroup>                  
                        <Button onClick={(e) => this.handleAnswer(e, id)}>Submit</Button>
                    </Form>                                                                                                                                             
                  </Media>
              </Media>                                                              
          </CardBody>                                        
      </Card>            
    )
}
}

function mapStateToProps({authedUser, users, questions}, ownProps) {  
  const question = questions[ownProps.match.params.id]
  return {
    authedUser,
    question : formatQuestion(question, users[question.author], authedUser)
  }
}

export default connect(mapStateToProps)(QuestionDetail);
