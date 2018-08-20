import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames'

class Home extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render() {
        const { questionIds, questions, authedUser } = this.props;
        return(                                                                                                    
            <div>
                <Nav tabs justified className="mt-4">
                    <NavItem>
                        <NavLink                        
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>
                        Unanswered Questions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink                        
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}>
                        Answered Questions
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <QuestionList id="ql-unanswered" questionIds={questionIds.filter(id => !questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))}/>                                   
                    </TabPane>
                    <TabPane tabId="2">
                        <QuestionList id="ql-answered" questionIds={questionIds.filter(id => questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))}/>                                       
                    </TabPane>
                </TabContent>
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