
import Header from './component/Header'
import Mainlist from './component/Mainlist'
import Sidelist from './component/Sidelist'
import Business from './component/Business'
import axios from 'axios'
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    text:"Super Hero",
    data:null
   }
  componentDidMount(){
  axios.get("https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=76455507bd3745ccb6e56417a6272315")
  .then((res)=>{ 
   
     
  this.setState({
   data:res.data
   
  })
  })
  }
  render() {
   
    console.log(this.state.data);
    return (
      <div>
         <div id="page-container">
         <Header/>

   
{ this.state.data !== null&&  <Mainlist title={this.state.data.articles[0].title} date={this.state.data.articles[0].publishedAt} content={this.state.data.articles[0].content} img={this.state.data.articles[0].urlToImage} url={this.state.data.articles[0].url}/> } 
{console.log(this.state.data)}
<Business/>
         {/* <Sidelist/> */}
        </div>
      </div>
    )
  }
}
