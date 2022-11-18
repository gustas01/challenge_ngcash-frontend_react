import { Input } from "@mui/material";
import './style.css'

export default function CashOut(): JSX.Element{
  return(
    <section className="cashOutContainer">
      <form action="" className="cashOutForm">
        <Input title="Usuário" sx={{backgroundColor: 'var(--backgroung-color-input)', color: 'var(--text-color-input)', paddingLeft: '5px'}} placeholder='Digite o nome do usuário'/>
        <Input id="value" title="Valor" sx={{backgroundColor: 'var(--backgroung-color-input)', color: 'var(--text-color-input)' ,paddingLeft: '5px'}} type='number' placeholder="Digite o valor a ser transferido"/>
        <button className="buttonForm">Fazer Cash-Out</button>
      </form>
    </section>
  )
}