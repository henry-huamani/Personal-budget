import axios from "axios";

const GET_ACCESS = "GET_ACCESS";
const GET_INCOME_OPERATIONS = "GET_INCOME_OPERATIONS";
const GET_OUTFLOW_OPERATIONS = "GET_OUTFLOW_OPERATIONS";
const GET_RECORDS = "GET_RECORDS";
const GET_INCOME_AMOUNT = "GET_INCOME_AMOUNT";
const GET_OUTFLOW_AMOUNT = "GET_OUTFLOW_AMOUNT";

export function getAccess(body){
    return function(dispatch){
        axios.post('http://localhost:3001/login', body)
        .then(response => response.data)
        .then(data => {
            document.cookie = `token=${data.data.token}; max-age=${60*60*4}; path=/; samesite=strict`;
            dispatch({
                type: GET_ACCESS,
                payload: data.data.user
            });
        })
        .catch(error => alert(error));
    }
}

export function getOperationsByType(typeOperation, resultType){
    return function(dispatch){
        if(resultType === "elements"){
            axios.get(`http://localhost:3001/operations/${typeOperation}`, {
                headers: {
                    'Authorization': `Bearer ${document.cookie.replace('token=', '')}`  
                }
            })
            .then(response => response.data)
            .then(data => dispatch({
                type: typeOperation === "income" ? GET_INCOME_OPERATIONS : GET_OUTFLOW_OPERATIONS,
                payload: data
            }))
            .catch(err => console.log(err));
        }
        else if(resultType === "amount"){
            axios.get(`http://localhost:3001/operations/${typeOperation}`, {
                headers: {
                    'Authorization': `Bearer ${document.cookie.replace('token=', '')}`  
                }
            })
            .then(response => response.data)
            .then(data => dispatch({
                type: typeOperation === "income" ? GET_INCOME_AMOUNT : GET_OUTFLOW_AMOUNT,
                payload: data
            }))
            .catch(err => console.log(err));
        }
    }
}

export function getRecords(){
    return function(dispatch){
        axios.get('http://localhost:3001?last=10', {
            headers: {
                'Authorization': `Bearer ${document.cookie.replace('token=', '')}`  
            }
        })
        .then(response => response.data)
        .then(data => dispatch({type: GET_RECORDS, payload: data}))
        .catch(err => console.log(err));
    }
}

export async function sendNewUserRegistration(body){
    const {data} = await axios.post('http://localhost:3001/register', body);
    return data;
}