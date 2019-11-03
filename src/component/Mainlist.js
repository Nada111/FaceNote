import React, { Component } from 'react'

export default class Mainlist extends Component {
    render() {
        return (
 <div>
         <div className="clear"></div>
        
        
        
            <div id="main-article">
        
                <h2>News</h2>
                
                <div className="container">
                <img id="main-article-image" src={this.props.img}></img>
                <h3 className="h33"><a href={this.props.url}> {this.props.title}</a></h3>
                    

                    <div id="article-summary">

                      <p className="date1"> {this.props.date}</p>
                      <p>{this.props.content}</p>

                    </div>
                    
              
                </div>
                
            </div>
            </div>
         
        )
    }
}
