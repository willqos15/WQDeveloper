
import './App.css'
import Terminalbar from './components/terminalbar'
import Navbar from './components/navbar'
import CardPerfil from './components/cardperfil'
import CardHabilidades from './components/cardhabilidades'
import CardProjetos from './components/cardprojetos'
import CardInfo from './components/cardinfo'
import CardRecomendacao from './components/cardrecomendacao'
import { IoIosArrowUp } from "react-icons/io";

function App() {
 

  return (
    <>
    <Navbar/>
    <CardPerfil/>
    <CardProjetos/>
    <CardHabilidades/>
    <CardInfo/>
    <CardRecomendacao/>
  
    <a className="return" href="#perfil"><IoIosArrowUp /></a>
    
    
     
    </>
  )
}

export default App
