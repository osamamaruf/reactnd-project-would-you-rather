import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Toolbar from './Toolbar'
import LandingPage from './LandingPage'
import PageNotFound from './PageNotFound'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>  
          <Toolbar />  
            <div className="container"> 
              <div className="row justify-content-center">
                <div className="col-6">
                  <Switch>                  
                    {this.props.notLoggedIn === true
                      ? <Route path='/' component={LandingPage}/>                                          
                      : <Dashboard />                    
                    }
                    <Route component={PageNotFound}/>
                  </Switch>           
                </div>
              </div>
            </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
