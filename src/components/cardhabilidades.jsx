import styles from './cardhabilidades.module.css'
import { useEffect, useRef, useState } from 'react'

import { motion } from "motion/react"

export default function CardHabilidades() {

    //ANIMAÇÃO NO JS PURO
    // const ref = useRef(null)
    // const [mostrar,setMostrar] = useState(false)
    // useEffect(()=>{
    //     const observador = new IntersectionObserver(
    //         ([entry])=> {
    //             if (entry.isIntersecting) {
    //                 setMostrar(true)
    //             }
    //         }, {threshold: 0.2}
    //     )

    //     if (ref.current) observador.observe(ref.current)

    // }, [])



    const Card = {
        ini: {scaleY: 0.9, opacity: 0},

        open: {scaleY: 1, opacity: 1, transition: { duration: 0.8 } },

      
    }


    return (<div>

        <section id="habilidades"
            className={styles.cardh}>
            

            <motion.div initial="ini" whileInView="open" 
            variants={Card}
            viewport={{ once: true }}
            className={styles.cardind}>

                <h1 > Habilidades: </h1>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865830/HTML5_logo_and_wordmark.svg_1_amqcbj.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>HTML</h2>
                        <ul>
                            <li>- Organização de tags</li>
                            <li>- Validação de Inputs</li>
                            <li>- Uso de midias e links</li>
                            <li>- Integração com CSS e JS</li>

                        </ul>
                    </div>
                </motion.section>

                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865829/css-3-logo-1_1_f0dstp.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>CSS</h2>
                        <ul>
                            <li>- Uso de Flexbox</li>
                            <li>- Manuseio de classes </li>
                            <li>- Responsividade</li>
                            <li>- Media Queries</li>

                        </ul>
                    </div>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865829/javascript-logo-javascript-icon-transparent-free-png_1_nlvesd.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>Javascript</h2>
                        <ul>
                            <li>- Lógica de Programação</li>
                            <li>- Manipulação de Variáveis</li>
                            <li>- Condicionais e Repetição</li>
                            <li>- Uso de funções</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865829/React-icon.svg_knvqkx.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>React JS</h2>
                        <ul>
                            <li>- Criação de componentes</li>
                            <li>- Renderização condicional</li>
                            <li>- UseState, Context e Effect</li>
                            <li>- React Hook Forms</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865828/57233882-20344080-6fe5-11e9-9086-d20a955bed59_t1zjrv.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>Biblioteca AXIOS</h2>
                        <ul>
                            <li>- Consumo de APIs REST</li>
                            <li>- GET, POST, PUT e DELETE</li>
                            <li>- Tratamento com Try/Catch</li>
                            <li>- Integração com React</li>

                        </ul>
                    </div>
                </motion.section>





                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865828/github-white-icon_hlaeva.webp"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>Git/Github</h2>
                        <ul>
                            <li>- Criação de repositório</li>
                            <li>- Controle de Branchs </li>
                            <li>- Git commit </li>
                            <li>- Git push e pull</li>
                        </ul>
                    </div>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865830/logo-mongodb-png-mongodb-logo-png-400_1_bmhkar.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>MongoDB</h2>
                        <ul>
                            <li>- Noções básicas</li>
                            <li>- Operações CRUDs </li>
                            <li>- Consulta de Dados </li>
                            <li>- Biblioteca Mongoose</li>
                        </ul>
                    </div>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865828/illustration_node_6bca4c07f8_tuj9of.png"></img>
                    </div>

                    <div className={styles.infoh}>
                        <h2>Node JS</h2>
                        <ul>
                            <li>- Noções básicas</li>
                            <li>- Biblioteca Express</li>
                            <li>- Get, Post, Update e Delete </li>
                            <li>- Cors, JWT, tokens e bcrypt </li>
                        </ul>
                    </div>
                </motion.section>

            </motion.div>








        </section>
    </div>
    )
}