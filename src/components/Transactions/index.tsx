import { useCallback, useEffect, useState } from 'react'
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

  const [filterdate, setFilterdate] = useState<String>('')
  const [filtercashout, setFiltercashout] = useState(false)
  const [filtercashin, setFiltercashin] = useState(false)

  function handleGetCashout(event: React.ChangeEvent<HTMLInputElement>){
    setFiltercashout(event.target.checked)
  }

  function handleGetCashin(event: React.ChangeEvent<HTMLInputElement>){    
    setFiltercashin(event.target.checked)
  }

  function handleGetDate(event: React.ChangeEvent<HTMLInputElement>){     
    setFilterdate(new Date(event.target.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}))
  }


  async function handleFilter(event: React.MouseEvent){
    event.preventDefault()
    try{
      let datefilterString = ''
      
      if(filterdate.toString() !== 'Invalid Date')        
        datefilterString = `&filterdate=${filterdate}`
      
      const response = await fetch(`${constants.baseURL}/transactions?filtercashout=${filtercashout}&filtercashin=${filtercashin}${datefilterString}`, {
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

    }catch(error: any){
      toast.error(`${error.toString().slice(7)}`)
    }
  }

  const getTransactions = useCallback(async () => {
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
    
  }, [props.token]) 

  function handleClearForm(){
    try{
      setFiltercashin(false)
      setFiltercashout(false)
      setFilterdate('')
      getTransactions()
    }catch(error: any){
      toast.error(`${error.toString().slice(7)}`)
    }
  }

  useEffect(() => {
    try{
      getTransactions()
    }catch(error: any){
      toast.error(`${error.toString().slice(7)}`)
    }
  }, [props.token, getTransactions])

  return(
    <section className="transactionsContainer">
      
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
          {transactions?.map(el => 
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
      
       <div className="filterField">
        <form action="">
          <input onSelect={handleGetDate} type="date" name="filterdate" id="" />
          <div className="filtercash">
            <span>
              <input onChange={handleGetCashout} checked={filtercashout} type="checkbox" name="cashout" id="filtercashout" />
              <label htmlFor="filtercashout">Cash-Out</label>
            </span>
            <span>
              <input onChange={handleGetCashin} checked={filtercashin} type="checkbox" name="cashin" id="filtercashin" />
              <label htmlFor="filtercashin">Cash-In</label>
            </span>
          </div>

          <span className='filterFormButtons'>
            <button className='filterButton' onClick={e => handleFilter(e)}>Filtrar</button>
            <button type='reset' className='resetButton' onClick={handleClearForm}>Limpar</button>
          </span>
        </form>
        </div>
    </section>
  )
}