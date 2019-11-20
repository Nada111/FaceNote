import React, { Component } from 'react'

import { Container, Form, Button } from 'react-bootstrap'
export default class Contact extends Component {
 
   render() {
       return (


<div className="container">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Re-enter email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Re-enter password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</div>

       )
   }
}