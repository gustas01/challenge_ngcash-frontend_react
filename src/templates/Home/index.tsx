import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useLocation } from 'react-router-dom'
import './style.css'

export default function Home(): JSX.Element{
  const {state} = useLocation()
    return(
        <main className="homeContainer">
          <Header token={state}/>
          <Navbar token={state}/>
        </main>
    )
}