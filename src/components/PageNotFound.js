import React from 'react';
import { Link } from 'react-router-dom'

function PageNotFound (){
  return (
    <div className="mt-4">
        <center>
          <div>404</div>
          <Link to="/">Return to Home Page</Link>
        </center>
    </div>
);
}

export default PageNotFound;
