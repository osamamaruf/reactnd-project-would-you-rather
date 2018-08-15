import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import { Tabs, Tab } from 'react-bootstrap'

class Home extends Component{
    render() {
        const { questionIds, questions, authedUser } = this.props;
        return(                                              
                <div className="container">                    
                    <Tabs defaultActiveKey={1}>
                        <Tab eventKey={1} title="Unanswered Questions">
                            <QuestionList questionIds={questionIds.filter(id => !questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))}/>                                   
                        </Tab>
                        <Tab eventKey={2} title="Answered Questions">
                            <QuestionList questionIds={questionIds.filter(id => questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))}/>                                   
                        </Tab>                        
                    </Tabs>                  
                </div>            
        )
    }
}

function mapStateToProps({ questions , authedUser}){    
                            
    return {
      questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      questions,
      authedUser                    
    }
}

export default connect(mapStateToProps)(Home)