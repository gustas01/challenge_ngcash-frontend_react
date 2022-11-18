import logo from '../../assets/logoPequena.png'
import './style.css'

export default function Header(){
    return(
        <header className="headerContainer">
            <span>
                <a href="/">
                    <img src={logo} alt="" className="iconLogoNavBar"/>
                </a>
            </span>
            <a href="https://ng.cash/">Conheça a NG.CA$H</a>
            <span style={{display: 'flex', flexDirection: 'column'}}>
                <p>Bem-vindo, UsuárioLogado!</p>
                <p>Balance: R$ 123,00</p>
            </span>
                <button className='buttonForm'>Sair</button>
        </header>
    )
}