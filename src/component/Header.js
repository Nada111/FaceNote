import React, { Component } from 'react'
import {
    BrowserRouter ,
    Switch,
    Route,
    Link, 
  }
  from "react-router-dom";

  import Login from './login'
  import Reg from './register'

  

export default class Header extends Component {
    render() {
        return (
            <div>
                 <div className="clear"></div>
        
        <div className="menu-bar-container">
            
            <div className="menu-bar">
              
                <h1> FaceNote</h1>
                
            </div>
            
            <div className="clear"></div>
            
            <div id="menu-bar-2-container">
            
                <div id="menu-bar-2">
                

             {/* ****************************************** */}

     <BrowserRouter>
    
  
        <Link className="a1" to="/login"> Login</Link>
        <Link className="a1" to="/register"> Register</Link>
        <Link className="a1" to="/"> Home</Link>

        
            <Switch>
                
                 <Route  path="/login" component={Login}/>
                 <Route  path="/register" component={Reg}/>
                
      
      </Switch>

             </BrowserRouter>
</div>
             {/* *********************************************** */}
            
            </div>
        
        </div>
                
            </div>
        )
    }
}
