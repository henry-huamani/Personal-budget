import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { getAccess } from "../actions";
import {connect} from "react-redux";

const LogIn = ({handleClickShow, getAccess}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        if(event.target.value) event.target.classList.remove('border-danger');
        else event.target.classList.add('border-danger');
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value) event.target.classList.remove('border-danger');
        else event.target.classList.add('border-danger');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email && password){
            const body = {
                email,
                password
            }
            getAccess(body);
        }
        else{
            !email && event.target.children[0].firstElementChild.classList.add('border-danger');
            !password && event.target.children[1].firstElementChild.classList.add('border-danger');
        }
    }
    return(
        <Form onSubmit={handleSubmit} className="border border-2 rounded p-3 bg-white">
            <Form.Group className="mb-3">
                <Form.Control type="email" value={email} placeholder="Enter email"
                onChange={handleChangeEmail}
                onClick={(event) => !email && event.target.classList.add('border-danger')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="password" value={password} placeholder="Password"
                onChange={handleChangePassword}
                onClick={(event) => !password && event.target.classList.add('border-danger')} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
                Log In
            </Button>
            <hr />
            <Container className="text-center">
                <Button variant="success" className="w-50" onClick={handleClickShow}>
                    Sign Up
                </Button>
            </Container>
            {document.cookie && <Redirect to="/home"/>}
        </Form>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getAccess})(LogIn);