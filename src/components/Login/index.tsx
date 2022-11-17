import './style.css'
import logo from '../../assets/logoPequena.png'

export default function Login(){
    return (
        <div className="loginContainer">
            <section className="loginSection">
                <img src={logo} alt="logo" className='logoLogin' />
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='Digite seu usuário' />
                    <input type="password" placeholder='Digite sua senha' />
                    <button className='buttonLogin'>Entrar</button>
                </form>
            </section>
        </div>
    )
}