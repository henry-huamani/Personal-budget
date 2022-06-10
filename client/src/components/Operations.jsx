import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Operations = ({records, setShowChange, setShowForm, setNewOperation, setIdUpdate}) => {

    const handleUpdateClick = (id, concept, amount, date, TypeOfOperationId) => {
        setShowForm(true);
        setNewOperation({
            concept,
            amount,
            date,
            TypeOfOperationId
        });
        setIdUpdate(id);
    }

    const handleDeleteClick = (id) => {
        axios.delete(`http://localhost:3001/operations/clear/${id}`, {
            headers: {
                'Authorization': `Bearer ${document.cookie.replace('token=', '')}`  
            }
        })
        .then(response => {
            if(response.data === 1){
                alert("Record deleted successfully");
                setShowChange(true);
            }
            else{
                alert("The record was not deleted");
            }
        })
        .catch(err => console.error(err));
    }

    return records.length > 0 ? (
        <Table bordered hover responsive variant="dark">
            <thead>
                <tr>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type of operation</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => (
                    <tr key={record.id}>
                        <td>{record.concept}</td>
                        <td>S/ {record.amount}</td>
                        <td>{record.date}</td>
                        <td>{record.Type_of_operation.name}</td>
                        <td>
                            <button onClick={() => handleUpdateClick(record.id, record.concept, record.amount, record.date, record.TypeOfOperationId)}><i className="bi bi-pen-fill"></i>
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleDeleteClick(record.id)}><i className="bi bi-trash-fill"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    ) : <p className="font-monospace fs-5 text-center">You have not yet registered any operations</p>;
}

export default Operations;