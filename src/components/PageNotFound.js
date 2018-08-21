import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageNotFound extends Component {

  render() {    
    return (
        <div className="mt-4">
            <center>
              <div>404</div>
              <Link to="/">Return to Home Page</Link>
            </center>
        </div>
    );
  }
}

export default PageNotFound;
