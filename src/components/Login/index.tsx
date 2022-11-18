import './style.css'
import logo from '../../assets/logoPequena.png'
import { Input } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast} from 'react-toastify'
import constants from '../../utils/contants'
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from 'react-icons/ri'

export default function Login(){
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  function handleGetUserName(event: React.ChangeEvent<HTMLInputElement>){      
    setUserName(event.target.value)
  }

  function handleGetPassword(event: React.ChangeEvent<HTMLInputElement>){        
    setPassword(event.target.value)
  }

  async function handleLogin(event: React.MouseEvent){
    event.preventDefault()
    try{

      if(!userName || !password){
        toast.warning('Campos obrigatórios não preenchidos')
        return 
      }
      
      const response = await fetch(`${constants.baseURL}/tokens`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_name: userName, password})
      })
      
      const data = await response.json();
      
      if(data.errors)
        throw new Error(data.errors)
      
       
      localStorage.setItem('token', data.token)   
      navigate('/home', { state: data.token })
    }catch(error: any){
      toast.error(`${error.toString().slice(7)}`)
    }
  }

    return (
        <div className="loginContainer">
          <section className="loginSection">
            <img src={logo} alt="logo" className='logoLogin' />
            <h1>Login</h1>
            <form action="">
              <span>
                <AiOutlineUser/>
                <Input className='inputLogin' type="text" placeholder='Digite seu usuário' required onChange={handleGetUserName}/>
              </span>
              <span>
                <RiLockPasswordLine/>
                <Input className='inputLogin' type="password" placeholder='Digite sua senha' required onChange={handleGetPassword}/>
              </span>
              <button className='buttonForm' onClick={e => handleLogin(e)}>Entrar</button>
            </form>
          </section>
        </div>
    )
}