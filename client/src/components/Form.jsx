import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InsertionAndEditingForm = ({setShowChange, setShowForm, newOperation, setNewOperation, idUpdate, setIdUpdate}) => {

    const handleChange = (event) => {
        setNewOperation({
            ...newOperation,
            [event.target.name]: event.target.value
        });
    } 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newOperation.concept && newOperation.amount && newOperation.date){
            if(idUpdate){
                axios.put("http://localhost:3001/operations", {...newOperation, id: idUpdate}, {
                    headers: {
                        'Authorization': `Bearer ${document.cookie.replace('token=', '')}`  
                    }
                })
                .then(response => {
                    if(response.data[0] === 1){
                        alert("Record edited successfully");
                        setShowChange(true);
                        setShowForm(false);
                        setIdUpdate(null);
                        setNewOperation({
                            concept: "",
                            amount: "",
                            date: "",
                            TypeOfOperationId: 1
                        });
                    }
                    else{
                        alert("The record was not edited");
                    }
                })
            }
            else{
                axios.post("http://localhost:3001/operations", newOperation, {
                    headers: {
                        'Authorization': `Bearer ${document.cookie.replace('token=', '')}`  
                    }
                })
                .then(response => {
                    if(typeof response.data !== 'string'){
                        alert("Record submitted successfully");
                        setShowChange(true);
                        setShowForm(false);
                        setNewOperation({
                            concept: "",
                            amount: "",
                            date: "",
                            TypeOfOperationId: 1
                        });
                    }
                    else console.error(response.data);
                })
                .catch(e => {
                    console.error(e);
                });
            }
        }
        else{
            alert("Missing data");
        }  
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Concept: *</Form.Label>
                <Form.Control type='text' name='concept' onChange={handleChange} value={newOperation.concept} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicNumber'>
                <Form.Label>Amount: *</Form.Label>
                <Form.Control type='number' name='amount' onChange={handleChange} value={newOperation.amount} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicDate'>
                <Form.Label>Date: *</Form.Label>
                <Form.Control type='date' name='date' onChange={handleChange} value={newOperation.date} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicSelect'>
                <Form.Label>Type of operation: *</Form.Label>
                <Form.Select aria-label="Default select example" disabled={idUpdate? true : false} name="TypeOfOperationId" onChange={handleChange} value={newOperation.TypeOfOperationId}>
                    <option value={1} >Income</option>
                    <option value={2}>Outflow</option>
                </Form.Select>
                {idUpdate? <Form.Text className="text-muted">This field cannot be modified</Form.Text> : null}
            </Form.Group>
            <Button variant="secondary" type="reset" onClick={() => {
                setShowForm(false);
                setNewOperation({
                    concept: "",
                    amount: "",
                    date: "",
                    TypeOfOperationId: 1
                });
            }} className='me-1'>Cancel</Button>
            <Button variant="primary" type="submit" className='ms-1'>{idUpdate ? 'Save changes' : 'Submit'}</Button>
        </Form>
    )
}

export default InsertionAndEditingForm;