import './style.css'
import logo from '../../assets/logoPequena.png'
import { Input } from '@mui/material'

export default function SignUp(){
    return (
        <div className="signupContainer">
            <section className="signupSection">
                <img src={logo} alt="logo" className='logosignup' />
                <h1>Criar conta</h1>
                <form action="">
                    <Input type="text" placeholder='Digite seu usuário' required/>
                    <Input type="password" placeholder='Digite sua senha' required/>
                    <button className='buttonForm'>Criar</button>
                </form>
            </section>
        </div>
    )
}