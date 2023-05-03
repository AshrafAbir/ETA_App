import{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initial state. transactions, all we need is sate of transaction in global context so that we can do some calculations like add transactions
// delete transactions, with the help of this initial state. 
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

// create context
export const GlobalContext = createContext(initialState);



// cretae provider Component == in order to accsess of other componenets to have this global state need a provider, In provider we wrap all 
// children components thats why we need a provider component. 

export const GlobalProvider = ({ children }) => { // children - destructering as props  
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions
    function deleteTransaction(id){
        dispatch({
            type : "DELETE_TRANSACTION",
            payload : id
        });

    }
    function addTransaction(transaction){
        dispatch({
            type : "ADD_TRANSACTION",
            payload : transaction
        });

    }
    

    return (<GlobalContext.Provider value={{ // values - accsess these values from any other component 
        transactions: state.transactions, // In Other component transactions will be the {GlobalContext's initialState} = state and its's transactions
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    )
}