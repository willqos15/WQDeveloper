import styles from './navbar.module.css'
import { useState } from 'react';

export default function Navbar() {

    const [menu, setMenu] = useState(false)
    return (<header>
        <nav className={styles.nav} id="nav">
            <div className={styles.titulo}>

                <h1>
                    Queiroz |   Developer </h1>
            </div>

            <div className={styles.divmenu}>
                <button className={styles.menu}
                    onClick={() => setMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={menu ? styles.on : styles.off}>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#perfil">Contato</a></li>
                </ul>
            </div>
        </nav>
        <hr className={styles.navline} />

    </header>)
}