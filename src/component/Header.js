import React, { Component } from 'react'
import {
    BrowserRouter ,
    Switch,
    Route,
    Link, 
  }
  from "react-router-dom";
  import Home from './Home'
  import Business from './Business'
  import Intertain from './Intertain'
  import Science from './Since'
  import Sport from './Sport'
  import Tec from './Tec'
  import Health from './Health'
  import Subscribe from './Subscribe'

  

export default class Header extends Component {
    render() {
        return (
            <div>
                 <div className="clear"></div>
        
        <div className="menu-bar-container">
            
            <div className="menu-bar">
            
                <h1> NEWS</h1>
                
            </div>
            
            <div className="clear"></div>
            
            <div id="menu-bar-2-container">
            
                <div id="menu-bar-2">
                

             {/* ****************************************** */}

     <BrowserRouter>
    
        <Link className="a1" to="/home"> {this.props.Home}</Link>
        <Link className="a1" to="/business"> {this.props.Business}</Link>
        <Link className="a1" to="/entertainment"> {this.props.Entertainment}</Link>
        <Link className="a1" to="/since"> {this.props.Science}</Link>
        <Link className="a1" to="/sport">{this.props.Sport}</Link>
        <Link className="a1" to="/tec"> {this.props.Technology}</Link>
        <Link className="a1" to="/health"> {this.props.Health}</Link>
        <Link className="a1" to="/subscribe"> Subscribe</Link>

        
            <Switch>
                 <Route  path="/home" component={Home}/>
                 <Route  path="/business" component={Business}/>
                 <Route  path="/Entertainment" component={Intertain}/>
                 <Route  path="/since" component={Science}/>
                 <Route  path="/sport" component={Sport}/>
                 <Route  path="/tec" component={Tec}/>
                 <Route  path="/health" component={Health}/>
                 <Route  path="/subscribe" component={Subscribe}/>

                
      
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
