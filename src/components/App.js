import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Toolbar from './Toolbar'
import LandingPage from './LandingPage'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>                    
              {this.props.loading === true
                ? <Fragment>
                    <div className="container"> 
                      <Route path='/' exact component={LandingPage}/>
                    </div>
                  </Fragment>
                : <Fragment>
                    <Toolbar />  
                    <Dashboard />
                  </Fragment>                        
              }          
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
