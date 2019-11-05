import React, { Component } from 'react'
import axios from 'axios'
import * as moment from 'moment'
export default class Business extends Component {
    state={
        data:null
       }
      componentDidMount(){
      axios.get("https://newsapi.org/v2/top-headlines?language=en&country=us&category=technology&apiKey=76455507bd3745ccb6e56417a6272315")
      .then((res)=>{ 
       
         
      this.setState({
       data:res.data
       
      })
      })
      }
  
      render() {
        return (
            <div id="page-container">
 
            <div className="clear"></div>
           
           
           
               <div id="main-article">
           
                   <h2>Technology</h2>
       
                  { this.state.data !== null&&   
                    <div className="container">
                   <img id="main-article-image" src={this.state.data.articles[0].urlToImage}></img>
                   <h3 className="h33"><a href={this.state.data.articles[0].url}> {this.state.data.articles[0].title}</a></h3>
                       
   
                       <div id="article-summary">
                       
                         <p className="date1">{moment(this.state.data.articles[0].publishedAt).startOf('hour').fromNow() } | {this.state.data.articles[0].source.name}</p>
                        
                         <p>{this.state.data.articles[0].content}</p>
   
                       </div>
                       
                 
                   </div>}
                
                   { this.state.data !== null&& 
        <div id="watch-listen">
           { this.state.data.articles.map((ele,index )=>{
               if( 0 <index&&index<=9){
               return ( 
                   <div className="Watch-div">
                       <img className="article-side-image" src={ele.urlToImage}></img>
                       <p className="date2">{moment(ele.publishedAt).startOf('hour').fromNow() } | {ele.source.name}</p>
                        <h3 ><a className="watch-listen-link" href={ele.url}> {ele.title}</a></h3>
                   </div>
              )
               }
               } )
           
                  
               }
   
                   
               </div>
                   }
                </div>
               </div>
               
        )
    }
}
