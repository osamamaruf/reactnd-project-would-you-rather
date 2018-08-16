import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import { Tabs, Tab } from 'react-bootstrap'

class Home extends Component{
    render() {
        const { questionIds, questions, authedUser } = this.props;
        return(                                                                                
            <Tabs id="home" defaultActiveKey={1}>
                <Tab id="unanswered" eventKey={1} title="Unanswered Questions">
                    <QuestionList id="ql-unanswered" questionIds={questionIds.filter(id => !questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))}/>                                   
                </Tab>
                <Tab id="answered" eventKey={2} title="Answered Questions">
                    <QuestionList id="ql-answered" questionIds={questionIds.filter(id => questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))}/>                                   
                </Tab>                        
            </Tabs>                                     
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