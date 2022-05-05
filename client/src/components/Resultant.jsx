import React, {useEffect, useState} from "react";
import {getOperationsByType, getRecords} from "../actions";
import Form from "./Form";
import Operations from "./Operations";
import {connect} from "react-redux";

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

    return <div>
        <p>Total amount of income: {props.incomeAmount}</p>
        <p>Total amount of outflow: {props.outflowAmount}</p>
        <p>Resultant: {props.incomeAmount - props.outflowAmount}</p>

        <h4>Last 10 operations recorded</h4>
        <Operations records={props.records}
        setShowChange={setShowChange}
        setShowForm={setShowForm}
        setNewOperation={setNewOperation}
        setIdUpdate={setIdUpdate}/>
        
        <button onClick={() => setShowForm(true)}>Add new operation</button>
        {showForm ? <Form setShowChange={setShowChange}
        setShowForm={setShowForm}
        newOperation={newOperation}
        setNewOperation={setNewOperation}
        idUpdate={idUpdate}
        setIdUpdate={setIdUpdate}/> : null}
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