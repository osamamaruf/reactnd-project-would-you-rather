import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Toolbar extends Component{
    render() {        
        return(            
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Would You Rather?</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>     
                <Nav>
                    <NavItem eventKey={1} href="/">
                    Home
                    </NavItem>
                    <NavItem eventKey={2} href="/add">
                    New Question
                    </NavItem>    
                    <NavItem eventKey={2} href="/leaderboard">
                    Leader Board
                    </NavItem>  
                </Nav>  
                <Nav pullRight>
                    <NavItem eventKey={1} href="/logout">
                        Logout
                    </NavItem>                    
                </Nav>         
            </Navbar>
        )
    }
}

export default Toolbar