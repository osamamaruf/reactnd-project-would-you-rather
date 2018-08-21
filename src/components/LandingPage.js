import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Card, CardHeader, CardBody, CardSubtitle, Input, Label} from 'reactstrap'
import { setAuthedUser } from '../actions/authedUser'


class LandingPage extends Component {
  state = {      
    value : ''
  } 

  handleSubmit = (e) => {
    e.preventDefault()

    const { value} = this.state  
    const { dispatch } = this.props
    
    dispatch(setAuthedUser(value))
  }

  handleChange(event) {    
    this.setState({value: event.target.value});
  }

  isDisabled = () => {
    return this.state.value===''
  }

  render() {    
    const { users } = this.props
    return (
      <Card className="mt-4">
        <CardHeader>                  
          <h4 className="text-center">Would you rather...</h4>
        </CardHeader>                                        
        <CardBody>            
            <CardSubtitle className="text-center">Please sign in below to play</CardSubtitle>            
            <Form className="text-center">                            
              <FormGroup>    
                <Label for="userSelect">Sign in</Label>      
                <Input type="select" id="userSelect" value={ this.state.value } onChange={ (e) => { this.handleChange(e)}}>
                      <option disabled  value=''>Select User</option>
                      { 
                        Object.keys(users).map((userId) =>                         
                        <option key={userId} value={userId}>{ users[userId].name } </option>)                        
                      }                                                                      
                </Input>                              
              </FormGroup>
              <Button disabled={this.isDisabled()} onClick={(e) => this.handleSubmit(e) }>Submit</Button>
            </Form>
        </CardBody>
      </Card>      
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LandingPage);
