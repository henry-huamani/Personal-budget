import React, {useEffect, useState} from "react";
import {getOperationsByType, getRecords} from "../actions";
import InsertionAndEditingForm from "./Form";
import Operations from "./Operations";
import {connect} from "react-redux";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

const Resultant = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [showChange, setShowChange] = useState(true);
    const [idUpdate, setIdUpdate] = useState(null);
    const [newOperation, setNewOperation] = useState({
        concept: "",
        amount: "",
        date: "",
        TypeOfOperationId: 1
    });
    
    const {getOperationsByType, getRecords} = props;

    useEffect(() => {
        if(showChange){
            getOperationsByType("income", "amount"); 
            getOperationsByType("outflow", "amount");
            getRecords();
            setShowChange(false);
        }
    }, [showChange]);

    return <div className='p-1'>
        <Card className="mt-3">
            <ListGroup variant="flush">
                <ListGroup.Item className="lead">Total amount of income: {props.incomeAmount}</ListGroup.Item>
                <ListGroup.Item className="lead">Total amount of outflow: {props.outflowAmount}</ListGroup.Item>
                <ListGroup.Item className="lead">Resultant: {props.incomeAmount - props.outflowAmount}</ListGroup.Item>
            </ListGroup>
        </Card>

        <h6 className="display-6 my-3 text-primary text-center">Last 10 operations recorded</h6>
        <Operations records={props.records}
        setShowChange={setShowChange}
        setShowForm={setShowForm}
        setNewOperation={setNewOperation}
        setIdUpdate={setIdUpdate}/>
        
        <Container className="text-center">
            <Button onClick={() => setShowForm(true)} variant='primary' >Add new +</Button>
        </Container>

        <Modal show={showForm} onHide={() => setShowForm(false)} backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>New operation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InsertionAndEditingForm setShowChange={setShowChange}
                setShowForm={setShowForm}
                newOperation={newOperation}
                setNewOperation={setNewOperation}
                idUpdate={idUpdate}
                setIdUpdate={setIdUpdate}/>
            </Modal.Body>
        </Modal>
    </div>
}

function mapStateToProps(state){
    return{
        incomeAmount: state.incomeAmount,
        outflowAmount: state.outflowAmount,
        records: state.records
    }
}

export default connect(mapStateToProps, {getOperationsByType, getRecords})(Resultant);