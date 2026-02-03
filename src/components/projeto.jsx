import { useState } from 'react'
import styles from './cardprojetos.module.css'
import { motion, AnimatePresence } from 'motion/react'
import { IoIosArrowUp } from "react-icons/io";

export default function Projeto({ ref, titulo, imagemain, resumo, ullinks, habilidades, resultado, imagens }) {


    function Rolar(suaref) {


        if (!suaref.current) return

        const el = suaref.current

        const observador = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    if (el === ref.current) { setOpen(false) }
                    observador.disconnect()
                }

            }, { root: null, threshold: 0 }
        )

        observador.observe(el)
        el.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    const [open, setOpen] = useState(false)
    return (
        <section>
            <div className={styles.infopro}>
                <h2 ref={ref}><strong>{titulo}</strong></h2>

                <img className={styles.mainfoto} src={imagemain} />

                <p> <strong>Resumo:</strong> {resumo}</p>

                <div className={styles.link}>
                    <h3><strong>Links:</strong></h3>
                    {ullinks}
                </div>

                <button onClick={() => setOpen(!open)}>
                    {open ? "Ver menos" : "Ver mais sobre"}
                </button>

                <AnimatePresence>
                    {open &&
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}>
                                
                            <hr />

                            <h3>Decisões Técnicas:</h3>

                            <p>{habilidades}</p>

                            <hr />
                            <p> <strong>Resultado:</strong>{resultado}</p>
                            <hr />

                            <h3>Imagens:</h3>
                            <div className={styles.imgfull}>
                                {imagens}
                            </div>

                            <a className={styles.arrow} onClick={() => { Rolar(ref) }}><IoIosArrowUp /></a>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

        </section>
    )
}