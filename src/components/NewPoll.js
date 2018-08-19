import React, { Component } from 'react';
import { Button, Label, Input, Form, FormGroup, Card, CardHeader, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

class NewPoll extends Component {

  render() {
    return (

      <Card>
        <CardHeader>                  
          <h4 className="text-center">Create New Question</h4>
        </CardHeader>                                        
        <CardBody body>            
            <CardSubtitle>Complete the question below: </CardSubtitle>
            <CardTitle>Would you rather...</CardTitle>
            <Form>
              <FormGroup>          
                <Input type="text" id="optionOneText" placeholder="Enter option one text here." />
              </FormGroup>
              <div className="text-center">
                <Label>or</Label>
              </div>
              <FormGroup>          
                <Input type="text" id="optionTwoText" placeholder="Enter option two text here." />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
        </CardBody>
      </Card>      
    );
  }
}

export default NewPoll;
