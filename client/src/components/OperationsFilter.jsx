import React, { useEffect, useState } from "react";
import {getOperationsByType} from "../actions";
import Operations from "./Operations";
import Form from "./Form";
import {connect} from "react-redux";

const OperationsFilter = ({incomeOperations, outflowOperations, getOperationsByType}) => {
    const [filterValue, setFilterValue] = useState("income");
    const [showChange, setShowChange] = useState(true);
    const [idUpdate, setIdUpdate] = useState(null);
    const [editOperation, setEditOperation] = useState({
        concept: "",
        amount: "",
        date: "",
        TypeOfOperationId: null
    });
    const [showForm, setShowForm] = useState(false);

    const handleChange = (event) => {
        setFilterValue(event.target.value);
    }

    useEffect(() => {
        if(showChange){
            getOperationsByType("income", "elements"); 
            getOperationsByType("outflow", "elements");
            setShowChange(false);
        }
    }, [showChange]);

    return(
        <React.Fragment>
            <div>
                <label>Filtered by: </label>
                <select name="type" onChange={handleChange} value={filterValue} >
                    <option value="income" >Income</option>
                    <option value="outflow" >Outflow</option>
                </select>

                <div>
                    <Operations
                    records={filterValue === "income" ? incomeOperations : outflowOperations}
                    setShowChange={setShowChange}
                    setShowForm={setShowForm}
                    setNewOperation={setEditOperation}
                    setIdUpdate={setIdUpdate} 
                    />
                </div>

                <div>
                    {showForm ? <Form setShowChange={setShowChange}
                    setShowForm={setShowForm}
                    newOperation={editOperation}
                    setNewOperation={setEditOperation}
                    idUpdate={idUpdate}
                    setIdUpdate={setIdUpdate} /> : null}
                </div>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        incomeOperations: state.incomeOperations,
        outflowOperations: state.outflowOperations
    }
}

export default connect(mapStateToProps, {getOperationsByType})(OperationsFilter);