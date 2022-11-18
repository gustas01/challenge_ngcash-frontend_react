import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import constants from '../../utils/contants'
import './style.css'

interface ITransactions {
  id: Number,
  value: Number,
  debited_account_id: Number,
  credited_account_id: Number
  created_at: String,
  updated_at: String,
}

interface IToken {
  token: String
}

export default function Transactions(props: IToken): JSX.Element{
  const [transactions, setTransactions] = useState<[ITransactions]>()

  useEffect(() => {
    async function getTransactions(){
      const response = await fetch(`${constants.baseURL}/transactions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },
      })
      
      const data = await response.json()

      if(data.errors)
        throw new Error(data.errors)

      setTransactions(data)
    }

    try{
      getTransactions()
    }catch(error: any){
      toast.error(`${error.toString().slice(7)}`)
    }
  }, [props.token])

  return(
    <section className="transactionsContainer">
      {!!transactions?.length && 
      <table border={1}>
        <thead>
          <tr>
            <td>Valor (R$)</td>
            <td>Conta do débito</td>
            <td>Conta do crédito</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map(el => 
          <tr key={`${el.created_at}`}>
            <td>
              {`${el.value}`}
            </td>
            <td>
              {`${el.debited_account_id}`}
            </td>
            <td>
              {`${el.credited_account_id}`}
            </td>
            <td>
              {new Date(`${el.created_at}`).toLocaleDateString('pt-BR')}
            </td>
          </tr>
            )} 
        </tbody>
      </table>
      }
       <div className="filterField">
          <input type="date" name="filterdate" id="" />
          <div className="filtercash">
            <span>
              <input type="checkbox" name="cashout" id="filtercashout" />
              <label htmlFor="filtercashout">Cash-Out</label>
            </span>
            <span>
              <input type="checkbox" name="cashin" id="filtercashin" />
              <label htmlFor="filtercashin">Cash-In</label>
            </span>
          </div>

          <button className='filterButton'>Filtrar</button>
        </div>
    </section>
  )
}