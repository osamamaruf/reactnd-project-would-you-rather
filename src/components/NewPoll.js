import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { handleSaveQuestion }  from '../actions/shared'
import { Button, Label, Input, Form, FormGroup, Card, CardHeader, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class NewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = (e, option) => {    
    if(option === 'optionOneText'){
      this.setState({
          optionOneText : e.target.value
      })
    } else {
      this.setState({
        optionTwoText : e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText} = this.state  
    const { dispatch } = this.props

    dispatch(handleSaveQuestion({    
        optionOneText,
        optionTwoText

    }))

    this.setState({
      optionOneText : '',
      optionTwoText : '',
      toHome: true  
    })
  }

  isDisabled = () => {
    return this.state.optionOneText==='' || this.state.optionTwoText===''
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if(toHome === true){
      return <Redirect to='/' />
    }

    return (

      <Card className="mt-4">
        <CardHeader>                  
          <h4 className="text-center">Create New Question</h4>
        </CardHeader>                                        
        <CardBody>            
            <CardSubtitle>Complete the question below: </CardSubtitle>
            <CardTitle>Would you rather...</CardTitle>
            <Form>
              <FormGroup>          
                <Input type="text" id="optionOneText" onChange={ (e) => {this.handleChange(e, 'optionOneText')}} value={ optionOneText } placeholder="Enter option one text here." />
              </FormGroup>
              <div className="text-center">
                <Label>or</Label>
              </div>
              <FormGroup>          
                <Input type="text" id="optionTwoText" onChange={ (e) => {this.handleChange(e, 'optionTwoText')}} value={ optionTwoText } placeholder="Enter option two text here." />
              </FormGroup>
              <Button disabled={ this.isDisabled() } onClick={(e) => this.handleSubmit(e) }>Submit</Button>
            </Form>
        </CardBody>
      </Card>      
    );
  }
}

export default connect()(NewPoll);
