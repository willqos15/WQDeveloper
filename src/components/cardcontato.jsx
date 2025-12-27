import styles from './cardcontato.module.css'
import imagem from '../img/deslizar.png'
import { motion } from "motion/react"
import { IoIosCall } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";



export default function CardContato() {

    return (<>


        <div id="contatos">


            <motion.section
                className={styles.contato}>


                <div className={styles.divc}>
                    <IoIosCall className={styles.icoc} />

                    <div>
                        <h2 className={styles.hsobre}>Contato & Currículo: </h2>
                        <ul>
                            <li>Celular:
                                <a href="https://wa.me/5593991878598"
                                    target="_blank">
                                    (93) 9 99187-8598</a></li>
                            <li>Email:
                                <a href="mailto:willqos15@gmail.com">
                                    willqos15@gmail.com
                                </a>

                                </li>
                            <li>Github:
                                <a href="https://github.com/willqos15"
                                target="_blank">willqos15</a>
                            </li>
                        </ul>

        <button className={styles.btn}>
                Baixar Currículo
                <FaFileDownload className={styles.icodown} />
            </button>
                    </div>

                </div>




            </motion.section>

            
        </div>



    </>)
}