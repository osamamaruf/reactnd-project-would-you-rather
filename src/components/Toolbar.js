import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, NavLink, Collapse, Media } from 'reactstrap'

class Toolbar extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
      
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {        
        const { authedUser, avatar } = this.props        
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="mr-auto">Would You Rather?</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2" />  
                    <Collapse isOpen={this.state.isOpen} navbar>              
                        <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/add">New Question</NavLink>                    
                        </NavItem>    
                        <NavItem>
                            <NavLink href="/leaderboard">Leader Board</NavLink>
                        </NavItem>                                           
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink disabled>
                                    <Media object src={avatar} height={32} width={32} alt="avatar" className="rounded-circle"/>
                                    { authedUser }
                                </NavLink>
                            </NavItem>   
                            <NavItem>
                                <NavLink href="/logout">Logout</NavLink>
                            </NavItem>   
                        </Nav>                
                    </Collapse>
            </Navbar>                        
        )
    }
}

function mapStateToProps({ authedUser, users }) {      
    return {
      authedUser,
      avatar: users[authedUser].avatarURL      
    }
}
  
  export default connect(mapStateToProps)(Toolbar);