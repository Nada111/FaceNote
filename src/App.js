
import Header from './component/Header'
import Footer from './component/Footer'
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
 
  render() {
   
   
    return (
      <div>
        
         <Header/>

   
         <div className="clear"></div>
             <Footer/>
       
      </div>
    )
  }
}
