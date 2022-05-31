import React, {useState} from "react";
import { sendNewUserRegistration } from "../actions";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const SignUp = ({showAlertSuccess, hideModal}) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    const [alertDanger, setAlertDanger] = useState(false);

    const handleChangeName = (event) => {
        setName((name) => event.target.value);
        if(event.target.value.length > 0) event.target.classList.remove('border-danger');
        else event.target.classList.add('border-danger');
    }

    const handleChangeLastname = async(event) => {
        setLastname((lastname) => event.target.value)
        if(event.target.value.length > 0) event.target.classList.remove('border-danger');
        else event.target.classList.add('border-danger');
    }

    const handleChangeEmail = (event) => {
        setEmail((email) => event.target.value)
        if(event.target.value.length > 0) event.target.classList.remove('border-danger');
        else event.target.classList.add('border-danger');
    }

    const handleChangePassword = (event) => {
        setPassword((password) => event.target.value)
        if(event.target.value.length > 0) event.target.classList.remove('border-danger');
        else event.target.classList.add('border-danger');
    }

    const handleChangeGender = (event) => {
        setGender((gender) => event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && gender.length > 0){
            const body = {
                name,
                lastname,
                email,
                password,
                gender
            }
            try {
                const data = await sendNewUserRegistration(body);
                hideModal();
                showAlertSuccess();
                setName('');
                setLastname('');
                setEmail('');
                setPassword('');
                setGender('');
            } catch (error) {
                alert(error);
            }
        }
        else{
            setAlertDanger(true);
            setTimeout(() => {
                setAlertDanger(false);
            }, 5000);
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Alert show={alertDanger} variant="danger"
                onClose={() => setAlertDanger(false)} dismissible>
                Complete all fields to submit your registration
            </Alert>
            <Form.Group className="mb-3 d-flex">
                <Form.Control type="text" name="name" placeholder="Name" className="me-1" onChange={handleChangeName}
                value={name}
                onClick={(event)=> { if(!name) event.target.classList.add('border-danger')}}
                />

                <Form.Control type="text" name="lastname" placeholder="Lastname" className="ms-1"
                onChange={handleChangeLastname}
                value={lastname}
                onClick={(event)=> { if(!lastname) event.target.classList.add('border-danger')}}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="email" name="email" placeholder="Email"
                onChange={handleChangeEmail}
                value={email}
                onClick={(event)=> { if(!lastname) event.target.classList.add('border-danger')}}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChangePassword}
                value={password}
                onClick={(event)=> { if(!lastname) event.target.classList.add('border-danger')}}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gender: </Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        value="female"
                        type="radio"
                        onChange={handleChangeGender}
                    />
                    <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        value="male"
                        type="radio"
                        onChange={handleChangeGender}
                    />
                </div> 
            </Form.Group>
            <Modal.Footer>
                <Container className="text-center">
                    <Button type="submit" variant="success">
                        Sign Up
                    </Button>
                </Container>
            </Modal.Footer>
        </Form>
    )
}

export default SignUp;