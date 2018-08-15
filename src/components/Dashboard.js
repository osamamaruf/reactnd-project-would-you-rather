import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Home from './Home'

class Dashboard extends Component{
    render() {        
        return(
            <div>  
                <Toolbar />                             
                <Home />
            </div>
        )
    }
}


export default Dashboard