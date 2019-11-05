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

  

export default class Header extends Component {
    render() {
        return (
            <div>
                 <div className="clear"></div>
        
        <div className="menu-bar-container">
            
            <div className="menu-bar">
            
                <h1> NEWS</h1>
                
                <div id="local-news">
                
                    <a href="">Find local news</a>
                    
                
                
                </div>
                
            </div>
            
            <div className="clear"></div>
            
            <div id="menu-bar-2-container">
            
                <div id="menu-bar-2">
                
                  
                

             {/* ****************************************** */}

     <BrowserRouter>
    
        <Link className="a1" to="/home"> Home</Link>
        <Link className="a1" to="/business"> Business</Link>
        <Link className="a1" to="/entertainment"> Entertainment</Link>
        <Link className="a1" to="/since"> Science</Link>
        <Link className="a1" to="/sport">Sport</Link>
        <Link className="a1" to="/tec"> Technology</Link>
        <Link className="a1" to="/health"> Health</Link>

        
            <Switch>
                 <Route  path="/home" component={Home}/>
                 <Route  path="/business" component={Business}/>
                 <Route  path="/Entertainment" component={Intertain}/>
                 <Route  path="/since" component={Science}/>
                 <Route  path="/sport" component={Sport}/>
                 <Route  path="/tec" component={Tec}/>
                 <Route  path="/health" component={Health}/>

                
      
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
