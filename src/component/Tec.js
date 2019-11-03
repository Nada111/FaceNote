import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                { this.state.data !== null&&  this.state.data.articles[0].title} 
            </div>
        )
    }
}
