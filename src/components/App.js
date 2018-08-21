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
            <Switch>                  
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
              <Route component={PageNotFound}/>
             </Switch>           
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
