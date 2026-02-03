import styles from './cardhabilidades.module.css'
import { motion } from "motion/react"

export default function CardHabilidades() {

    const Card = {
        ini: { scaleY: 0.9, opacity: 0 },
        open: { scaleY: 1, opacity: 1, transition: { duration: 0.8 } },
    }

    return (

        <section id="habilidades"
            className={styles.cardh}>

            <motion.div initial="ini" whileInView="open"
                variants={Card}
                viewport={{ once: true }}>

                <h2> Habilidades: </h2>

                
                <div className={styles.grid}>
                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865829/React-icon.svg_knvqkx.png"></img>
                    </div>
                    <h3>React JS</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865829/javascript-logo-javascript-icon-transparent-free-png_1_nlvesd.png"></img>
                    </div>
                    <h3>Javascript</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767580585/33518868-6e2595c4-d76a-11e7-8260-31b4e8110c93_qklqhx.png"></img>
                    </div>
                    <h3>TypeScript</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767580583/Tailwind_CSS_Logo.svg_cojbcb.png"></img>
                    </div>
                    <h3>TailWind</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865828/57233882-20344080-6fe5-11e9-9086-d20a955bed59_t1zjrv.png"></img>
                    </div>
                    <h3>AXIOS</h3>
                </motion.section>

                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769959616/tanstack_j99rsh.png"></img>
                    </div>
                    <h3>TanStack Query</h3>
                </motion.section>

                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769959624/react-hook-form_geoqoi.webp"></img>
                    </div>
                    <h3>R.H.Form</h3>
                </motion.section>


                


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865830/HTML5_logo_and_wordmark.svg_1_amqcbj.png"></img>
                    </div>
                    <h3>HTML</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865829/css-3-logo-1_1_f0dstp.png"></img>
                    </div>
                    <h3>CSS</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865828/illustration_node_6bca4c07f8_tuj9of.png"></img>
                    </div>
                    <h3>Node JS</h3>
                </motion.section>

                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769956818/express-js_qqrukn.png"></img>
                    </div>
                    <h3>Express</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767276128/269-2693201_mysql-logo-circle-png_otjvcy.png"></img>
                    </div>
                    <h3>MySQL</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865830/logo-mongodb-png-mongodb-logo-png-400_1_bmhkar.png"></img>
                    </div>
                    <h3>MongoDB</h3>
                </motion.section>



                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769957058/n8n_au4vfw.png"/>
                    </div>
                    <h3>n8n</h3>
                </motion.section>


                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767276125/Python.svg_xowlo9.png"/>
                    </div>
                    <h3>Python</h3>
                </motion.section>

                
                <motion.section variants={Card}>
                    <div className={styles.ico}>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766865828/github-white-icon_hlaeva.webp"></img>
                    </div>
                    <h3>Git/Github</h3>
                </motion.section>

                </div>
                

            </motion.div>

        </section>
    )
}