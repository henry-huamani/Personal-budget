const initialState = {
    incomeOperations: [],
    outflowOperations: [],
    incomeAmount: null,
    outflowAmount: null,
    records: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_INCOME_OPERATIONS":
            return {
                ...state,
                incomeOperations: action.payload
            }
        
        case "GET_OUTFLOW_OPERATIONS":
            return {
                ...state,
                outflowOperations: action.payload
            }

        case "GET_INCOME_AMOUNT":
            return {
                ...state,
                incomeAmount: action.payload.reduce((acc, operation) => acc + operation.amount, 0)
            }

        case "GET_OUTFLOW_AMOUNT":
            return {
                ...state,
                outflowAmount: action.payload.reduce((acc, operation) => acc + operation.amount, 0)
            }
        
        case "GET_RECORDS":
            return {
                ...state,
                records: action.payload
            }

        default:
            return {...state}
    }
}