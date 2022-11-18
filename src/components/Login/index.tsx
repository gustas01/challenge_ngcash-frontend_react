import './style.css'
import logo from '../../assets/logoPequena.png'
import { Input } from '@mui/material'

export default function Login(){
    return (
        <div className="loginContainer">
            <section className="loginSection">
                <img src={logo} alt="logo" className='logoLogin' />
                <h1>Login</h1>
                <form action="">
                    <Input type="text" placeholder='Digite seu usuário' required/>
                    <Input type="password" placeholder='Digite sua senha' required/>
                    <button className='buttonForm'>Entrar</button>
                </form>
            </section>
        </div>
    )
}