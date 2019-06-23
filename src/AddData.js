import React from 'react';
import './App.css';
import {Card , CardGroup , Form , Button , Col} from 'react-bootstrap'

import LogoImg from './food.png'

class AddData extends React.Component{

    


    render(){
      return(
        <div className="split left">
            <CardGroup>
                <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Header>Login User</Card.Header>
                    <Card.Body>
                    <Card.Title>Enter name and Email</Card.Title>
                    <Card.Text>
                        <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                 Submit
                                </Button>
                            </Form>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
            </CardGroup>
      </div> 
      )
    }
  }

  export default AddData;







