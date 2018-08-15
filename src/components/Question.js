import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Panel, Image, Media } from 'react-bootstrap'

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
                        <Media>
                            <Media.Left align="middle">
                                <Image width={64} height={64} src={question.avatar} circle alt="avatar"/>
                            </Media.Left>
                            <Media.Body>
                                    <Media.Heading>Would You Rather?</Media.Heading>
                                    <div>{question.optionOneText}</div>
                                    <div>or</div>
                                    <div>{question.optionTwoText}</div>
                            </Media.Body>
                        </Media>                                            
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