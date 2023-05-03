import React, {useContext} from 'react'
import { GlobalContext } from './Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext); // pulling out transactions by destructering from GlobalContext by using useContext hook. 
  return (
    <>
       <h3>History</h3>
      <ul  className="list">
        {/* maping through GlobalContext variable transactions and using Transaction component. Transaction component needs to know which
        specific transaction to render  */}
        {transactions.map((transaction) =>(<Transaction key = {transaction.id} transaction = {transaction} />))} 
                                           {/* al it is a list, its need a unique key          {transaction}
                                            which can specify specific transactions.          (functions parameter-(transaction)) */}
      </ul>
    </>
  )
}

export default TransactionList
