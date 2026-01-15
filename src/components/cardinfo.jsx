import styles from './cardinfo.module.css'
import imagem from '../img/deslizar.png'
import { motion } from "motion/react"
import foto from '../img/foto.png'


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
                        <p>Sou formado em Engenharia da Computação e atuei como professor de robótica, com experiência em tecnologia e programação.</p>
                        <p>
                         Desenvolvo projetos em frontend e backend, com foco em código claro, organização e aprendizado contínuo. Busco atuar em ambientes que valorizem trabalho em equipe, colaboração e comunicação objetiva.</p>
                    </div>


                    <div>
                        <img className={styles.foto4x4} src={foto}></img>
                    </div>
                </div>
            </div>

        </section>















    </>)
}