
import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link, 
}
from "react-router-dom";



import './App.css';
import React, { Component } from 'react'


export default class App extends Component {
 
 
  render() {
   
   
    return (
      <div >
        <Header/>
        
     </div>
    )
  }
}
