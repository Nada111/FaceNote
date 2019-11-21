import React, { Component } from 'react'
import { Container, Form, Button,Navbar,Nav,Toast,ListGroup
} from 'react-bootstrap'




export default class Mainlist extends Component {
   
    render() {
    
        
        return (
            <div>
                <div className="friend">
                <ListGroup >
  <ListGroup.Item>Friend 1</ListGroup.Item>
  <ListGroup.Item>Friend 2</ListGroup.Item>
  <ListGroup.Item>Friend3</ListGroup.Item>
 
</ListGroup>
                </div>
                <div className="clear"> </div>    
            <div className="container">
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>What is in your mind</Form.Label>
        <Form.Control as="textarea" rows="3" />
     </Form.Group>
  
     <Button variant="primary" type="submit">
        Post it
       </Button>
    </Form>
         </div>
         <div className="clear"> </div>
            <div className="container2">
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
