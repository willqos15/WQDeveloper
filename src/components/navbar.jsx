import styles from './navbar.module.css'
import { TbWorld } from "react-icons/tb";

export default function Navbar()

{
    return(<>
    <nav className={styles.nav} id="nav"> 
        <div className={styles.titulo}>
            
            <h1>
              W. Queiroz |   Developer </h1>
        </div>
        
        <ul>
            <li> <a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contatos">Contato</a></li>
        </ul>
    </nav>
    <hr className={styles.navline}/>
    
    </>)
}