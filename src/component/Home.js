import React, { Component } from 'react'
import { Container, Form, Button,Navbar,Nav,Toast
} from 'react-bootstrap'




export default class Mainlist extends Component {
   
    render() {
    
        
        return (
            <div>
            <div className="container">
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>What is in your mind</Form.Label>
        <Form.Control as="textarea" rows="3" />
     </Form.Group>
  
     <Button variant="primary" type="submit">
        create post
       </Button>
    </Form>
         </div>
         <div className="clear"> </div>
            <div className="container">
            <Toast>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
    <strong className="mr-auto">post title</strong>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</div>
         </div>
        )
    }
}
