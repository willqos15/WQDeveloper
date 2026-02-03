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

                        <p>Com experiência em Desenvolvimento Web Front-end e formação em <strong> Engenharia da Computação</strong> atuei como professor de programação e <strong>desenvolvedor independente</strong> .</p>  <p>Acredito que o código deve ser escrito para máquinas executarem, mas para humanos entenderem.</p>

                             <p>Busco atuar como Desenvolvedor <strong>Front-end Júnior</strong> , com perfil analítico e ético, focado em soluções escaláveis, responsivas e de fácil manutenção, sendo reconhecido por gestores anteriores pela boa <strong> comunicação</strong>, <strong> colaboração</strong> e <strong>confiabilidade.</strong> </p>


                    </div>


                    <div>
                        <img className={styles.foto4x4} src={foto}></img>
                    </div>
                </div>
            </div>

        </section>















    </>)
}