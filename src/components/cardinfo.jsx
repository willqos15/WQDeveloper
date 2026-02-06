import styles from './cardinfo.module.css'
import imagem from '../img/deslizar.png'
import { motion } from "motion/react"
import foto from '../img/foto.png'


export default function CardInfo() {

    return (<>




        <section className={styles.bloco}  >
            <div id="sobre" className={styles.ancora}>
                <div className={styles.barratop} >
                    <h2 className={styles.hsobre}>Sobre mim: </h2>
                </div>
                <div className={styles.cardsobre}>

                    <div className={styles.textoi}>

                        <p>Formação em <strong>Engenharia da Computação</strong> com experiência em <strong>Desenvolvimento Web Frontend</strong>, atuando como desenvolvedor autônomo, com vivência em educação tecnológica. Foco em <strong>código limpo, responsividade e boas práticas</strong>, com abertura para feedback e construção conjunta de soluções.</p>
                        
                        <p>Acredito que o código deve ser escrito para máquinas executarem, mas para humanos entenderem.</p>

                              


                    </div>


                    <div>
                        <img className={styles.foto4x4} src={foto}></img>
                    </div>
                </div>
            </div>

        </section>















    </>)
}