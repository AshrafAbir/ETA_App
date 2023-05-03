import React ,{useContext}from 'react'
import { GlobalContext } from './Context/GlobalState'


const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount); // maping through the transactions and getting 
                                                                      // only the amounts by transaction.amount into an array.

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // add all the aray elements of amounts in one number. toFixed(2) is for 2 decimal number. 
  return (
    <>
       <h4 className='Balance'>Your Balance</h4>
      <h1 >${total}</h1>
      
    </>
  )
}

export default Balance
