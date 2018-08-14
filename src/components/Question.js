import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Panel, Image, Col, Row } from 'react-bootstrap'

class Question extends Component{
    render() {            
        const { question } = this.props        
        return(                                 
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            {question.name} says
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>    
                    <Row className="show-grid">
                            <Col xs={6} md={4}>
                            <Image src={question.avatar} thumbnail responsive/>                            
                            </Col>
                            <Col xs={12} md={8}>
                                <h4>Would you rather</h4>
                                <div>
                                    {question.optionOneText}
                                </div>
                                <div>
                                    or
                                </div>
                                <div>
                                    {question.optionTwoText}
                                </div>                                
                            </Col>
                        </Row>                          
                    </Panel.Body>
                </Panel>            
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question : formatQuestion(question, users[question.author], authedUser)
    }
}


export default connect(mapStateToProps)(Question)