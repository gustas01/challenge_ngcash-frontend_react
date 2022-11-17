import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import './style.css'

export default function Home(): JSX.Element{
    return(
        <main className="homeContainer">
          <Header/>
          <Navbar/>
        </main>
    )
}