import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function NavBar(){
    const handleClickLogOut = () => document.cookie = `token=; max-age=0`;
    
    return( 
        <Navbar bg="primary" expand="sm">
            <Container>
                <Navbar.Brand>Personal-Budget</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-end">
                        <Link className="text-decoration-none text-white m-2" to="/home">Home</Link>   

                        <Link className="text-white text-decoration-none m-2" to="/home/operations">Operations</Link>
                        
                        <Link className="text-white text-decoration-none m-2" to="/home/about">About</Link>

                        <Link className="text-white text-decoration-none m-2" to="/" onClick={handleClickLogOut}>Log Out <i className="bi bi-box-arrow-right"></i></Link>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}