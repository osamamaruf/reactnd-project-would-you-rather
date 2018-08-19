import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Card, Button, CardHeader, CardBody, Media, Label, Input, Form, FormGroup } from 'reactstrap'
import { formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/questions'

class QuestionDetail extends Component {

  state = {
        answer:''
  }

  handleAnswer= (e) => {
    e.preventDefault()

    const { dispatch, authedUser, question} = this.props

    dispatch(handleSaveQuestionAnswer({
        authedUser,
        qid: question.id,
        answer: this.state.answer

    }))
  }

  handleRadioToggle(value){
    this.setState({answer: value});
  }

  render() {            
    const { question } = this.props
    const { name, timestamp, avatar, optionOneText, optionTwoText } = question
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
                                <Input type="radio" name="vote" onClick={() => this.handleRadioToggle('optionOne')}  />{' '}
                                {optionOneText}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="vote" onClick={() => this.handleRadioToggle('optionTwo')}/>{' '}
                                {optionTwoText}
                                </Label>
                            </FormGroup>                            
                        </FormGroup>                  
                        <Button onClick={(e) => this.handleAnswer(e)}>Submit</Button>
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
