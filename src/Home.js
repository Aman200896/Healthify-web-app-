import React from 'react';
import './App.css';
import {Card ,ListGroup,ListGroupItem,Form,Button } from 'react-bootstrap'

import InlineBlock from 'react-inline-block'



const style3={
  display:'block',
  margin:'25px 50px 75px 100px',
  paddingLeft: '5px',
  boxShadow: '0 4px 50px 0 rgba(173, 9, 138, 0.2)',
  transition: '0.3s',
  borderRadius:'20px',
  background:'linear-gradient(to right bottom,#24c6dc, #514a9d)',
  color:'#4B0082'

}

class AddData extends React.Component{

  

    render(){
      return(
        <div className='bey' align='center' style={{  display:"flex",flex:1,justifyContent:"center",alignItems:"center"}} >
            
                {/* <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Header  style={{background:'linear-gradient(to right bottom,#7A9EC7, #D4E4F7)', color:"white"}}>Login User</Card.Header>
                    <Card.Body>
                    <Card.Title>Enter Email and Name</Card.Title>
                    <Card.Text>
                        <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="tect" placeholder="Himanshu" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                 <a  href='/patients' style={{color:'white'}}>Submit</a>
                                </Button>
                            </Form>
                    </Card.Text>
                    </Card.Body>
                </Card> */}

                <div >
  <Card style={{ width: '25rem',borderRadius:'20px',alignItems:"center",padding:20,height:"40" }} >
      <Card.Body>
      </Card.Body>
      <Form>
                          <Form.Group  controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" name="email" placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="tect" name="cazz" placeholder="Name" />
                          </Form.Group>
                          <Button variant="primary" type="submit"  onClick={this.handleLogin}>
                           <a  href='/patients' style={{color:'white'}}>Submit</a>
                          </Button>
                      </Form>
  </Card> 
  
        
                </div>

                
                
      </div> 
      )
    }
  }

  export default AddData;




  




