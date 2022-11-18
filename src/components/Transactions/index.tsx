import { useState } from 'react'
import './style.css'

export default function Transactions(): JSX.Element{
  const [transactions, setTransactions] = useState(new Array(10).fill({
    value: 1000,
    debited_account_id: 5,
    credited_account_id: 7,
    created_at: "2022-11-17T01:27:42.534Z"
  }))

  return(
    <section className="transactionsContainer">
      {!!transactions.length && 
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
          <tr key={el.created_at}>
            <td>
              {el.value}
            </td>
            <td>
              {el.debited_account_id}
            </td>
            <td>
              {el.credited_account_id}
            </td>
            <td>
              {new Date(el.created_at).toLocaleDateString('pt-BR')}
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