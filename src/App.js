
import Header from './component/Header'
import Footer from './component/Footer'
import './App.css';
import React, { Component } from 'react'


export default class App extends Component {
 
 
  render() {
   
   
    return (
      <div>
        
         <Header Home={"Home"} Business={"Business"} Sport={"Sport"} Health={"Health"} Entertainment={"Entertainment"} Science={"Science"} Technology={"Technology"} Health={"Health"}/>

   
         <div className="clear"></div>
             <Footer/>
       
      </div>
    )
  }
}
