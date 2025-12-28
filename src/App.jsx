
import './App.css'
import Terminalbar from './components/terminalbar'
import Navbar from './components/navbar'
import CardPerfil from './components/cardperfil'
import CardHabilidades from './components/cardhabilidades'
import CardProjetos from './components/cardprojetos'
import CardInfo from './components/cardinfo'
import CardContato from './components/cardcontato'
import { IoIosArrowUp } from "react-icons/io";

function App() {
 

  return (
    <>
    <Navbar/>
    <CardPerfil/>
    <CardInfo/>
    <CardProjetos/>
    <CardHabilidades/>
    <CardContato/>
    <a className="return" href="#nav"><IoIosArrowUp /></a>
    
    
     
    </>
  )
}

export default App
