import React from 'react';
import axios from 'axios';
import './App.css';
import {ListGroup,Card } from 'react-bootstrap'
import InlineBlock from 'react-inline-block'

const style3={
    display:'block',
    margin:'25px',
    paddingLeft: '5px',
    boxShadow: '0 4px 50px 0 rgba(173, 9, 138, 0.2)',
    transition: '0.3s',
    borderRadius:'20px',
    background:'linear-gradient(to right bottom,#24c6dc, #514a9d)',
    color:'#4B0082',

}


export default class Patient extends React.Component {

    state = {
        object :[],
        prescriptions:[],
        Meds :[],
        Diseases: []


    }
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount (){
        axios
          .get("https://async-healthify.herokuapp.com/patient/ashu@gmail.com")
          .then(res =>  res.data)
          .then(object =>this.setState({object , prescriptions: object.prescriptions , Meds: object.runningMedicines}))
          .catch(err => console.error(err+"in error block"));
    }
    

    render(){
        return (
            <div align="center" className="top">
    <Card border="primary" style={{ width: '100rem' }}>
    <Card.Header style={{background:'linear-gradient(to right bottom,#24c6dc, #514a9d)', color:"white"}}><b>Dashoard</b></Card.Header>
    <Card.Body>
      <Card.Text>
      <InlineBlock style={style3}>
        <Card style={{width: '25rem',borderRadius:'20px', margin:'20px',  paddingLeft: '5px',   boxShadow: '0 4px 50px 0 rgba(173, 9, 138, 0.2)',  transition: '0.3s',   borderRadius:'10rem',}} >
            <ListGroup className="list-group-flush">
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Name :-   {this.state.object.name}</ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Age :-   {this.state.object.age}</ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Blood group :-   {this.state.object.bloodGroup}</ListGroup.Item>
            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <ListGroup className="list-group-flush">
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Height :-   {this.state.object.height}</ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Weight :-   {this.state.object.weight}</ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>E-mail :-   {this.state.object.email}</ListGroup.Item>

            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <ListGroup className="list-group-flush">
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Phone :- {this.state.object.phone}</ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Emergency phone :- {this.state.object.emergencyPhone}</ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}> Address :-   {this.state.object.address}</ListGroup.Item>

            </ListGroup>
        </Card> 
        </InlineBlock>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="primary" style={{ width: '100rem' , marginTop:'2rem' }}>
    <Card.Header style={{background:'linear-gradient(to right bottom,#24c6dc, #514a9d)' ,color:"white"}}><b>Medical History</b></Card.Header>
    <Card.Body>
      <Card.Text>
      <InlineBlock style={style3}>
        <Card style={{width: '25rem',borderRadius:'20px', margin:'20px' }} >
        <Card.Title><b>Disease</b></Card.Title>
            <ListGroup className="list-group-flush">


             {this.state.prescriptions.map(thefuck =>(
                                <div>
                                    <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>   {thefuck.diseaseType}</ListGroup.Item>
                                    
                                </div>
            ))} 
            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
        <Card.Title><b>Medicins</b></Card.Title>
            <ListGroup className="list-group-flush">
            {this.state.Meds.map(thefuck =>(

                                <div>
                                    <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>  {thefuck.name}</ListGroup.Item>
                                    
                                </div>
            ))}

            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
        <Card.Title><b>Allergies</b></Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Mushroom </ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Dust </ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Snowphillic </ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Peanut </ListGroup.Item>
            <ListGroup.Item align="left" variant="light" style={{color:'blue'}}>Fish </ListGroup.Item>
            </ListGroup>
        </Card> 
        </InlineBlock>
      </Card.Text>
    </Card.Body>
  </Card>
            </div>
        ) 
    } 
}