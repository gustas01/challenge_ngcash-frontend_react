import logo from '../../assets/logoPequena.png'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { SetStateAction, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import constants from '../../utils/contants'

interface IToken{
  token: string
}

interface IUser {
  account_id: Number,
  exp: Number,
  iat: Number,
  id: Number,
  user_name: String,
}

interface IBalance {
  balance: Number
}

export default function Header(props: IToken){
  const navigate = useNavigate()

  const [userName, setUserName] = useState<String>('')
  const [balance, setBalance] = useState<Number>(0)

  function logout(){
    localStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    if(!localStorage.getItem('token'))
      navigate('/')
  }, [navigate])

  useEffect(() => {
    const decoded: IUser = jwt_decode(props.token)
    setUserName(decoded.user_name)    

    async function getBalance(){
      const response = await fetch(`${constants.baseURL}/accounts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },

      })

      const data: IBalance = await response.json()
      setBalance(data.balance)
    }
    
    getBalance()

  }, [props.token])

    return(
        <header className="headerContainer">
            <span>
              <img src={logo} alt="" className="iconLogoNavBar"/>
            </span>
            <a href="https://ng.cash/">Conheça a NG.CA$H</a>
            <span style={{display: 'flex', flexDirection: 'column'}}>
                <p>Bem-vindo, {userName}</p>
                <p>{`Balance: R$ ${balance}`}</p>
            </span>
                <button className='buttonForm' onClick={logout}>Sair</button>
        </header>
    )
}