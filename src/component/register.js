import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap'
export default class Contact extends Component {
   state={
       data: {},
       message:''
   }
   addDataToState(data){
       this.setState({data:data,message:"Thank you for subscribing"})
   }
   render() {
       return (
           <div>
           <Formik
               initialValues={{
                   firstName: '',
                   email: '',
               }}
               validationSchema={Yup.object().shape({
                   firstName: Yup.string()
                       .required('First Name is required'),
                      
                   email: Yup.string()
                       .email('Invalid Email'),
                     
               })}
               onSubmit={fields => {
                  
                   this.addDataToState(fields)
               }}
               render={({ errors, status, touched }) => (
                  <Container>
                        <br/>
                   <br/>
                   <br/>
                  <Form>
                       <div className="form-group">
                           <label htmlFor="firstName"><h3>First Name</h3></label>
                           <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                           <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email"><h3>Password</h3></label>
                           <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                           <ErrorMessage name="email" component="div" className="invalid-feedback" />
                       </div>

                       <div className="form-group">
                           <label htmlFor="email"><h3>Email</h3></label>
                           <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                           <ErrorMessage name="email" component="div" className="invalid-feedback" />
                       </div>
                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2"><h3>Login</h3></button>
                          
                       </div>
                   </Form>
                   </Container>
               )}
           />
                        <br></br>
        <h4>  {this.state.message}</h4>
        <br></br>
        <br></br>
           </div>
       )
   }
}