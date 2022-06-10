import React, { useEffect, useState } from "react";
import {getOperationsByType} from "../actions";
import Operations from "./Operations";
import InsertionAndEditingForm from "./Form";
import {connect} from "react-redux";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';

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

    const handleSelect= (key) => {
        setFilterValue(key);
    }

    useEffect(() => {
        if(showChange){
            getOperationsByType("income", "elements"); 
            getOperationsByType("outflow", "elements");
            setShowChange(false);
        }
    }, [showChange]);

    return(
        <div className='p-1'>
            <Tabs activeKey={filterValue}
                onSelect={handleSelect}
                className="mb-3 mt-1">
                    <Tab eventKey="income" title="Income">
                        <Operations
                            records={incomeOperations}
                            setShowChange={setShowChange}
                            setShowForm={setShowForm}
                            setNewOperation={setEditOperation}
                            setIdUpdate={setIdUpdate} 
                        />
                    </Tab>
                    <Tab eventKey="outflow" title="Outflow">
                        <Operations
                            records={outflowOperations}
                            setShowChange={setShowChange}
                            setShowForm={setShowForm}
                            setNewOperation={setEditOperation}
                            setIdUpdate={setIdUpdate} 
                        />
                    </Tab>
            </Tabs>

            <Modal show={showForm} onHide={() => setShowForm(false)} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Operation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InsertionAndEditingForm setShowChange={setShowChange}
                    setShowForm={setShowForm}
                    newOperation={editOperation}
                    setNewOperation={setEditOperation}
                    idUpdate={idUpdate}
                    setIdUpdate={setIdUpdate}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

function mapStateToProps(state){
    return{
        incomeOperations: state.incomeOperations,
        outflowOperations: state.outflowOperations
    }
}

export default connect(mapStateToProps, {getOperationsByType})(OperationsFilter);