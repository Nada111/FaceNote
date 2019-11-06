import React, { Component } from 'react'
import * as moment from 'moment'
import axios from 'axios'

export default class Mainlist extends Component {
    state={

        data:null
       }
      componentDidMount(){
      axios.get("https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=76455507bd3745ccb6e56417a6272315")
      .then((res)=>{ 
       
         
      this.setState({
       data:res.data
       
      })
      })
      .catch(()=>{console.log("Error")})
      }
    render() {
         console.log(this.state.data);
        
        return (
 <div id="page-container">
 
         <div className="clear"></div>
        
        
        
            <div id="main-article">
        
                <h2>News</h2>
    
               { this.state.data !== null&&  
               <div> 
                 <div className="container">
                
                <img id="main-article-image" src={this.state.data.articles[0].urlToImage}></img>
                <h3 className="h33"><a href={this.state.data.articles[0].url}> {this.state.data.articles[0].title}</a></h3>
                    

                    <div id="article-summary">
                    
                      <p className="date1">{moment(this.state.data.articles[0].publishedAt).startOf('hour').fromNow() } | {this.state.data.articles[0].source.name}</p>
                     
                      <p>{this.state.data.articles[0].content}</p>

                    </div>
                    
              
                </div>
                
                </div>}
             
                { this.state.data !== null&& 
     <div id="watch-listen">
        { this.state.data.articles.map((ele,index )=>{
            if( 1 <index&&index<=12){
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
