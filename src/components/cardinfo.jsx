import styles from './cardinfo.module.css'
import imagem from '../img/deslizar.png'
import { motion } from "motion/react"
import foto from '../img/foto.jpg'


export default function CardInfo() {

    return (<>




        <section

            //          viewport={{ once: true }}
            //         style={{originY: 0}}
            //         initial = {{scaleY: 0, opacity: 0}}
            // whileInView={{scaleY:1, opacity:1}}

            // transition={{duration: 0.6, ease: "easeIn"}}
            className={styles.bloco}  >
            <div id="sobre" className={styles.ancora}>
                <div className={styles.barratop} >
                    <h2 className={styles.hsobre}>Sobre mim: </h2>
                </div>
                <div className={styles.cardsobre}>

                    <div className={styles.textoi}>
                        <p>Sou engenheiro de computação e ex-professor de robótica educacional, com experiência em ensino de tecnologia e programação.</p>
                        <p>Busco meu primeiro emprego remoto como <strong>dev. júnior, estagiário ou trainee</strong>, aplicando e expandindo conhecimentos em frontend, backend e novas tecnologias.</p>
                    </div>


                    <div>
                        <img className={styles.foto4x4} src={foto}></img>
                    </div>
                </div>
            </div>

        </section>















    </>)
}