const initialState = {
    incomeOperations: [],
    outflowOperations: [],
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
        
        case "GET_RECORDS":
            return {
                ...state,
                records: action.payload
            }

        default:
            return {...state}
    }
}