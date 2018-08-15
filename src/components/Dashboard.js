import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Toolbar from './Toolbar'
import Home from './Home'
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard'

class Dashboard extends Component{
    render() {        
        return(
            <Router>
                <Fragment>  
                    <Toolbar />                             
                    <div className="container">
                        <Route path='/' exact component={Home}/>
                        <Route path='/add' exact component={NewPoll}/>
                        <Route path='/leaderboard' exact component={LeaderBoard}/>
                    </div>
                </Fragment>
            </Router>
        )
    }
}


export default Dashboard