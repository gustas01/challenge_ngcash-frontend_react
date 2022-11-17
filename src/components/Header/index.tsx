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
            <span>
                <a href="https://ng.cash/">Conheça a NG.CA$H</a>
            </span>
            <span>
                Bem-vindo, UsuárioLogado!
            </span>
        </header>
    )
}