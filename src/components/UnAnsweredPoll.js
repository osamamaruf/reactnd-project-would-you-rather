import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Label, Input, Form, FormGroup } from 'reactstrap'
import { handleSaveQuestionAnswer } from '../actions/questions'

class UnAnsweredPoll extends Component {
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
    const { optionOneText, optionTwoText } = question
    return (
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
    );
  }
}

function mapStateToProps({ authedUser }, ownProps) {     
    return {
      authedUser,
      question : ownProps.question
    }
}

export default connect(mapStateToProps)(UnAnsweredPoll);
