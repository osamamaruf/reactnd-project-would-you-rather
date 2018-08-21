import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard'
import QuestionDetail from './QuestionDetail'

class Dashboard extends Component{
    render() {        
        return(                                                                   
            <Fragment>                
                <Route path='/' exact component={Home}/>
                <Route path='/question/:id' component={QuestionDetail}/>
                <Route path='/add' component={NewPoll}/>
                <Route path='/leaderboard' component={LeaderBoard}/>                    
            </Fragment>                    
        )
    }
}


export default Dashboard