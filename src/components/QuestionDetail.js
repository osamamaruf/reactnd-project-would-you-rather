import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Panel, Image, Media } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'

class QuestionDetail extends Component {

  render() {            
    const { question } = this.props
    const { id, name, timestamp, avatar, optionOneText, optionTwoText } = question
    return(         
            <Panel>
                <Panel.Heading>
                    <Panel.Title>
                        <h4>{name} asks : </h4>
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
    )
}
}

function mapStateToProps({authedUser, users, questions}, ownProps) {
  console.log(ownProps)
  const question = questions[ownProps.match.params.id]
  return {
    authedUser,
    question : formatQuestion(question, users[question.author], authedUser)
  }
}

export default connect(mapStateToProps)(QuestionDetail);
