//Reducer is a Way to change your state and send it down to component application
// specify application state changes response to certain actions to our store/context 
// it is a way to change the state and send it to component. There is no way to change the state but only when we create new state. 

export default (state, action)=>{
    switch(action.type){
        case "DELETE_TRANSACTION":
        return {
            ...state, // current state 
            transactions : state.transactions.filter(transaction => transaction.id !== action.payload) // dispatch. filter out the unmatched transaction.ids cause
                                                                                                     //  we need to show the undeleted transaction except the deleted one  
        }
        case "ADD_TRANSACTION":
        return {
            ...state,
            // send the transactions that are already there and also the new one 
            transactions : [action.payload, ...state.transactions] 
        }                //new transaction  //this will bring all the transaction inside the transactions array 


        default :
        return state;
    }

}