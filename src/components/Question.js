import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Panel, Image, Media } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Question extends Component{
    render() {            
        const { question } = this.props
        const { id, name, timestamp, avatar, optionOneText, optionTwoText } = question
        return( 
            <Link to={`/question/${id}`}>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title>
                            <h4>{name} says</h4>
                            <h5>{formatDate(timestamp)}</h5>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>    
                        <Media>
                            <Media.Left align="middle">
                                <Image width={64} height={64} src={avatar} circle alt="avatar"/>
                            </Media.Left>
                            <Media.Body>
                                    <Media.Heading>Would You Rather?</Media.Heading>
                                    <div>{optionOneText}</div>
                                    <div>or</div>
                                    <div>{optionTwoText}</div>
                            </Media.Body>
                        </Media>                                            
                    </Panel.Body>
                </Panel>            
            </Link>
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