import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [show, setShow] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const handleClickShow = () => {
        if(show) setShow(false);
        else setShow(true);
    }
    const showAlertSuccess = () => {
        setAlertSuccess(true);
        setTimeout(() => {
            setAlertSuccess(false);
        }, 3000);
    }
    const hideModal = () => setShow(false);

    return(
        <div className="bg-light" style={{height: "100vh"}}>
            <Modal show={alertSuccess} onHide={() => setAlertSuccess(false)}>
                <Modal.Header className="bg-success" closeButton>
                <Modal.Title>Successful registration!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-success">
                    Your registration was successful. Now you can log in.
                </Modal.Body>
            </Modal>
            <Container className="d-flex align-items-center flex-lg-nowrap flex-sm-wrap" style={{height: "91.5vh"}}>
                <Container>
                    <div className="d-flex justify-content-lg-start justify-content-sm-center">
                        <i className="bi bi-cash-coin fs-1 text-primary me-1"></i>
                        <h1 className="display-5 fw-bold text-primary ms-1">Personal Budget</h1>
                    </div>
                    <p className="fs-5 text-lg-start text-sm-center">Looking for where to record your money flow? Look no further, this web application allows you to do so, so that in this way you do not lose control of your money.</p>
                </Container>
                <Container className="ps-5 pe-5">
                    <Container className="ps-5 pe-5">
                        <LogIn handleClickShow={handleClickShow}/>
                    </Container>
                </Container>
            </Container>

            <Modal show={show} onHide={handleClickShow} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUp showAlertSuccess={showAlertSuccess} hideModal={hideModal}/>
                </Modal.Body>
            </Modal>

            <Footer/>
        </div>
    )
}

export default Home;