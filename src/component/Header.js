import React, { Component } from 'react'
import {
    BrowserRouter ,
    Switch,
    Route,
    Link, 
  }
  from "react-router-dom";
  import { Container, Form, Button,Navbar,Nav,Toast
  } from 'react-bootstrap'

  import Login from './login'
  import Reg from './register'
  import Home from './Home'


  

export default class Header extends Component {
    render() {
        return ( 
            
       
        <div>
            
     <div>
            <Navbar id="Navbar" variant="dark" >
                <Navbar.Brand href="/">FaceNote</Navbar.Brand>
                <Navbar.Collapse  className="justify-content-end">
                    <Nav  className="mr-auto">
                       
                            <Nav.Link activeClassName="active" href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                     
                    </Nav>
                  
                </Navbar.Collapse>
            </Navbar>
            </div>

     
      
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Reg} />
             
            </Switch>
            </BrowserRouter>
          
   
        </div>
   
        )
    }
}



