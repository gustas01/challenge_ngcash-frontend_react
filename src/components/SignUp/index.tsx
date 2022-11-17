import './style.css'
import logo from '../../assets/logoPequena.png'

export default function SignUp(){
    return (
        <div className="signupContainer">
            <section className="signupSection">
                <img src={logo} alt="logo" className='logosignup' />
                <h1>Criar conta</h1>
                <form action="">
                    <input type="text" placeholder='Digite seu usuário' />
                    <input type="password" placeholder='Digite sua senha' />
                    <button className='buttonsignup'>Criar</button>
                </form>
            </section>
        </div>
    )
}