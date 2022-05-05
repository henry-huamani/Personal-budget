import React from "react";
import axios from "axios";

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
        axios.delete(`http://localhost:3001/operations/clear/${id}`)
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
        <table>
            <tr>
                <th>Concept</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type of operation</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {records.map(record => (
                <tr key={record.id}>
                    <td>{record.concept}</td>
                    <td>{record.amount}</td>
                    <td>{record.date}</td>
                    <td>{record.Type_of_operation.name}</td>
                    <td><button onClick={() => handleUpdateClick(record.id, record.concept, record.amount, record.date, record.TypeOfOperationId)}>edit</button></td>
                    <td><button onClick={() => handleDeleteClick(record.id)}>delete</button></td>
                </tr> 
            ))}
        </table>) : <p>You have not yet registered any operations</p>;
}

export default Operations;