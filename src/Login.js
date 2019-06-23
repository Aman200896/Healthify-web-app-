import React from 'react';
import './App.css';
import {Card , Form,Col,Button, CardGroup} from 'react-bootstrap'
import LogoImg from './food.png'

class Login extends React.Component{

    


    render(){
      return(
        <div className="split left">
        <CardGroup>
        <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Header>Report</Card.Header>
                    <Card.Body>
                    <Card.Title>Enter Details</Card.Title>
                    <Card.Text>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Test Name</Form.Label>
                            <Form.Control type="text" placeholder="Blood Test" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="Date" placeholder="Date" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Breif Summary</Form.Label>
                            <Form.Control placeholder="Blood Group o+" />
                        </Form.Group>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Medicine</Form.Label>
                            <Form.Control placeholder="PCM" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Freequency</Form.Label>
                            <Form.Control placeholder="3" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control placeholder="30" />
                        </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control placeholder="Avoid Oily Food" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Hospital Name</Form.Label>
                            <Form.Control placeholder="Hospital Name"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Card.Text>
                    </Card.Body>
            </Card>
            <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Header>Report</Card.Header>
                    <Card.Body>
                    <Card.Title>Enter Details</Card.Title>
                    <Card.Text>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="Date" placeholder="Date" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridType">
                            <Form.Label>Test Name</Form.Label>
                            <Form.Control type="text" placeholder="Blood test" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridSummary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control placeholder="Headache" />
                        </Form.Group>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridResult">
                            <Form.Label>Result</Form.Label>
                            <Form.Control placeholder="Blood group : O+" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridpos">
                            <Form.Label>Positive/Negative</Form.Label>
                            <Form.Control placeholder="Positive/Negative" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridHN">
                            <Form.Label>Hospital Name</Form.Label>
                            <Form.Control placeholder="30" />
                        </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control placeholder="Avoid Oily Food" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
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

  export default Login;