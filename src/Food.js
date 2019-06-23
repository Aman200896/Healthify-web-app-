import React from 'react';
import './App.css';
import axios from 'axios'
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
class Food extends React.Component{
    state = {
        FoodDetails :null

    }
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount (){
        axios
          .get("https://async-healthify.herokuapp.com/foodDetails/ashu@gmail.com")
          .then(res =>  res.data)
          .then(object =>this.setState({ FoodDetails: object}))
          .catch(err => console.error(err+"in error block"));
    }

    renderDetails()
    {
        if(this.state.FoodDetails)
        {
            return (
                <div>
                <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <Card.Body>
                 <Card.Title>Breakfast :</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <div><ListGroupItem><b>Calories : </b> {this.state.FoodDetails.breakfast.calories}</ListGroupItem></div>
                <div><ListGroupItem><p><b>proteins :</b> {this.state.FoodDetails.breakfast.proteins}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>carbohydrates :</b> {this.state.FoodDetails.breakfast.carbohydrates}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>vitamins :</b> {this.state.FoodDetails.breakfast.vitamins}</p></ListGroupItem></div>

            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <Card.Body>
                 <Card.Title>Lunch :</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <div><ListGroupItem><b>Calories : </b> {this.state.FoodDetails.lunch.calories}</ListGroupItem></div>
                <div><ListGroupItem><p><b>proteins :</b> {this.state.FoodDetails.lunch.proteins}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>carbohydrates :</b> {this.state.FoodDetails.lunch.carbohydrates}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>vitamins :</b> {this.state.FoodDetails.lunch.vitamins}</p></ListGroupItem></div>

            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <Card.Body>
                 <Card.Title>Snacks :</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <div><ListGroupItem><b>Calories : </b> {this.state.FoodDetails.snacks.calories}</ListGroupItem></div>
                <div><ListGroupItem><p><b>proteins :</b> {this.state.FoodDetails.snacks.proteins}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>carbohydrates :</b> {this.state.FoodDetails.snacks.carbohydrates}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>vitamins :</b> {this.state.FoodDetails.snacks.vitamins}</p></ListGroupItem></div>

            </ListGroup>
        </Card> 
        </InlineBlock>
        <InlineBlock style={style3}>
        <Card style={{ width: '25rem',borderRadius:'20px', margin:'20px' }} >
            <Card.Body>
                 <Card.Title>Dinner :</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <div><ListGroupItem><b>Calories : </b> {this.state.FoodDetails.dinner.calories}</ListGroupItem></div>
                <div><ListGroupItem><p><b>proteins :</b> {this.state.FoodDetails.dinner.proteins}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>carbohydrates :</b> {this.state.FoodDetails.dinner.carbohydrates}</p></ListGroupItem></div>
                <div><ListGroupItem><p><b>vitamins :</b> {this.state.FoodDetails.dinner.vitamins}</p></ListGroupItem></div>

            </ListGroup>
        </Card> 
        </InlineBlock>
                </div>
            );
        }
    }
    render(){
      return(
        <div>
            {this.renderDetails()}
          
        </div>
      )
    }
  }

  export default Food;