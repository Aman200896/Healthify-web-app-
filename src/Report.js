import React from 'react';
import axios from 'axios';
import './App.css';
import {ListGroup,Card ,ListGroupItem} from 'react-bootstrap'
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


export default class Report extends React.Component {

    state = {
        prescriptions :[]

    }
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount (){
        axios
          .get("https://async-healthify.herokuapp.com/patient/ashu@gmail.com")
          .then(res =>  res.data)
          .then(object =>this.setState({ prescriptions: object.reports}))
          .catch(err => console.error(err+"in error block"));
    }

    render(){
        return (
            <div align = "center" className="top">
                <div>
            {this.state.prescriptions.map(thefuck =>(
            <InlineBlock style={style3}>
                <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <Card.Body>
                 <Card.Title>Report Details</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <div><ListGroupItem><b>Date : </b> {thefuck.date}</ListGroupItem></div>
                <div><ListGroupItem><p><b>Test Type :</b> {thefuck.testType}</p></ListGroupItem></div>
            </ListGroup>
        </Card>
        </InlineBlock>
    ))}
    </div>


                    {/* <Card bg="info" text="white" style={{ width: '60rem'}}>
                        <Card.Header><b>Reports</b></Card.Header>
                        <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <ListGroup >
                            {this.state.prescriptions.map(thefuck =>(
                                <div>
                                    <ListGroup.Item align="left" variant="primary">Date :-   {thefuck.date}</ListGroup.Item>
                                    <ListGroup.Item align="left" variant="primary">Test Type :-   {thefuck.testType}</ListGroup.Item>
                                    <ListGroup.Item align="left" variant="primary"><img  src = {'data:image/jpeg;base64,'+thefuck.imagePres}/></ListGroup.Item>
                                </div>
                            ))}
                        </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card> */}

                </div >
        ) 
    } 
}