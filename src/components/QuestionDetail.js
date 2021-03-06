import React from 'react';
import { connect } from 'react-redux'
import UnAnsweredPoll from './UnAnsweredPoll'
import AnsweredPoll from './AnsweredPoll'
import PageNotFound from './PageNotFound'
import { formatQuestion } from '../utils/helpers'
import { Card, CardHeader, CardBody, Media } from 'reactstrap'
import { formatDate } from '../utils/helpers'

function QuestionDetail (props) {
  
  if(props.question === null){
    return <PageNotFound />
  }

  const { question } = props
  const { name, timestamp, avatar, hasAnswered } = question
  return(         
        <Card className="mt-4">
        <CardHeader>
                {   hasAnswered ? 
                      <h5>Asked by {name}</h5>:
                      <div>
                        <h4>{name} asks : </h4>
                        <h5>{formatDate(timestamp)}</h5>
                      </div>
                }    
        </CardHeader>                                        
        <CardBody>
            <Media>
                <Media left top>
                  <Media object src={avatar} height={64} width={64} alt="avatar" className="rounded-circle"/>
                </Media>
                <Media body> 
                  {   hasAnswered ? 
                      <AnsweredPoll question = {question} />:
                      <UnAnsweredPoll question = {question} />    
                  }                                           
                </Media>
            </Media>                                                              
        </CardBody>                                        
    </Card>            
  );
}

function mapStateToProps({authedUser, users, questions}, ownProps) {  
  const question = questions[ownProps.match.params.question_id]
  return {
    authedUser,
    question : question ? 
              formatQuestion(question, users[question.author], authedUser):
              null
  }
}

export default connect(mapStateToProps)(QuestionDetail);
