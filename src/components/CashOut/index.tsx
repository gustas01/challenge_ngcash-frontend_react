import { Input } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import constants from "../../utils/contants";
import './style.css'

interface IToken {
  token: String
}

export default function CashOut(props: IToken): JSX.Element{
  const [user, setUser] = useState<String>('')
  const [value, setValue] = useState<Number>(0)

  async function handleSubmitCashout(event: React.MouseEvent){
    try{
      event.preventDefault()

      const response = await fetch(`${constants.baseURL}/accounts`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },
        body: JSON.stringify({user_name_cashIn: user, cashOutValue: value})
      })

      const data = await response.json()
      
      if(data.errors)
      throw new Error(data.errors)
      
      toast.success(data.msg);
      setUser('')
      setValue(0)

    }catch(error: any){
      toast.error(`${error.toString().slice(7)}`)
    }
  }


  function handleGetUser(event: React.ChangeEvent<HTMLInputElement>){
    setUser(event.target.value)
  }

  function handleGetValue(event: React.ChangeEvent<HTMLInputElement>){
    setValue(Number(event.target.value))
  }


  
  return(
    <section className="cashOutContainer">
      <form action="" className="cashOutForm">
        <Input title="Usuário" onChange={handleGetUser} value={user} sx={{backgroundColor: 'var(--backgroung-color-input)', color: 'var(--text-color-input)', paddingLeft: '5px'}} placeholder='Digite o nome do usuário'/>
        <Input id="value" title="Valor" onChange={handleGetValue} value={value} sx={{backgroundColor: 'var(--backgroung-color-input)', color: 'var(--text-color-input)' ,paddingLeft: '5px'}} type='number' placeholder="Digite o valor a ser transferido"/>
        <button className="buttonForm" onClick={handleSubmitCashout}>Fazer Cash-Out</button>
      </form>
    </section>
  )
}