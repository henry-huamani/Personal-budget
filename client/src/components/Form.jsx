import React from "react";
import axios from "axios";

const Form = ({setShowChange, setShowForm, newOperation, setNewOperation, idUpdate, setIdUpdate}) => {

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
                axios.put("http://localhost:3001/operations", {...newOperation, id: idUpdate})
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
                axios.post("http://localhost:3001/operations", newOperation)
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
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="">Concept: * </label>
                    <input type="text" name="concept" onChange={handleChange} value={newOperation.concept}/>
                </li>
                <li>
                    <label htmlFor="">Amount: * </label>
                    <input type="number" name="amount" onChange={handleChange} value={newOperation.amount}/>
                </li>
                <li>
                    <label htmlFor="">Date: * </label>
                    <input type="date" name="date" onChange={handleChange} value={newOperation.date}/>
                </li>
                <li>
                    <label htmlFor="">Type of operation: * </label>
                    <select disabled={idUpdate? true : false} name="TypeOfOperationId" onChange={handleChange} value={newOperation.TypeOfOperationId}>
                        <option value={1} >Income</option>
                        <option value={2}>Outflow</option>
                    </select>
                </li>

                <button type="submit">Submit</button>
                <button type="reset" onClick={() => {
                    setShowForm(false);
                    setNewOperation({
                        concept: "",
                        amount: "",
                        date: "",
                        TypeOfOperationId: 1
                    });
                }}>Cancel</button>
            </ul>  
        </form>
    )
}

export default Form;