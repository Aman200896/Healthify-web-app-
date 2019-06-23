import React from 'react';
import axios from 'axios';
import './App.css';
import {ListGroup,Card,ListGroupItem } from 'react-bootstrap'
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
export default class Prescriptions extends React.Component {

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
          .then(object =>this.setState({prescriptions: object.prescriptions}))
          .catch(err => console.error(err+"in error block"));
    }

    render(){
        return (
            <div>

    {this.state.prescriptions.reverse().map(thefuck =>(
            <InlineBlock style={style3}>
                <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <Card.Img variant="top" style={{height:'300px'}} src = {'data:image/jpeg;base64,'+thefuck.imagePres} />
            <Card.Body>
                 <Card.Title>Disease : {thefuck.diseaseType}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <div><ListGroupItem><b>Date : </b> {thefuck.date}</ListGroupItem></div>
                <div>
                <ListGroupItem ><b>Medicines: </b> {thefuck.medicine.map(meds=>(
                   <ul style={{display:'inline-block' , marginRight:'1px'}}> <li >{meds.name}</li></ul>
                ))}</ListGroupItem>
                </div>
                <div><ListGroupItem><p><b>Doctor name :</b> {thefuck.doctorName}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>Hospital :</b> {thefuck.hospitalName}</p></ListGroupItem></div>
            </ListGroup>
        </Card> 
        </InlineBlock>
    ))}
    </div>
)}}