import React from 'react';
import './App.css';
import {Nav , Navbar } from 'react-bootstrap'
import Logo from './image3.png'


const navbar={
    background:'linear-gradient(to right bottom,#24c6dc, #514a9d)',
    height:'91px',
    paddingTop:'17px',
    color:'white'
    // position: 'fixed top', 
    // marginBottom:'5px',
    // position: 'sticky',
  

}
const logo={
    marginLeft: '200px'
}

const sizee ={
    marginLeft: '50px',
    fontSize:'20px',
    wordSpacing:'510px'
}
const sizee1 ={
    marginLeft: '50px',
    fontSize:'20px',
    wordSpacing:'510px',
    color:'white'
}


class Navpage extends React.Component{

    


    render(){
      return(
     
          <Navbar sticky="top" style={navbar}>
    <Navbar.Brand style={logo} href="/"><img src ={Logo} width ="120" height="70"/> </Navbar.Brand>


    <div className="">
    <Nav style ={sizee}>
    
      <Nav.Link style ={sizee1} href="/patients">Patients</Nav.Link>
      <Nav.Link style ={sizee1} href="/runmeds">RunningMedicines</Nav.Link>
      <Nav.Link style ={sizee1} href="/precriptions">Precriptions</Nav.Link>
      <Nav.Link style ={sizee1} href="/reports">Report</Nav.Link>
      <Nav.Link style ={sizee1} href="/food">Food</Nav.Link>
    </Nav>
    </div>
  </Navbar> 
  


      )
    }
  }


  export default Navpage;