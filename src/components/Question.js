import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Card, Button, CardHeader, CardBody, Media } from 'reactstrap'
import { formatDate } from '../utils/helpers'
import { withRouter } from 'react-router-dom'

class Question extends Component{

    toDetail = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/question/${id}`)
    }

    render() {            
        const { question } = this.props
        const { id, name, timestamp, avatar, optionOneText, optionTwoText } = question
        return(             
            <Card className="mt-4">
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
                            <Media heading>
                                Would You Rather?
                            </Media>                        
                                <div>{optionOneText}</div>
                                <div>or</div>
                                <div>{optionTwoText}</div> 
                                <Button onClick={(e) => this.toDetail(e, id)}>View Poll</Button>
                            </Media>
                        </Media>                                                                        
                    </CardBody>                                        
            </Card>                        
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


export default withRouter(connect(mapStateToProps)(Question))