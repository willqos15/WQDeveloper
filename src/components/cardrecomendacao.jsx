import styles from './cardrecomendacao.module.css'
import imagem from '../img/deslizar.png'
import { motion } from "motion/react"
import { IoIosCall } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";



export default function CardRecomendacao() {

    return (<>


        <div id="contatos">


            <motion.section
                className={styles.contato}>

                    <h2>RECOMENDAÇÃO:</h2>

            <p>


                “Demonstrou postura profissional exemplar, com responsabilidade, ética, postura técnica, colaborativa e profissional.<br/> Recomenda-se sua atuação com plena confiança"</p>
<p> Coordenação Pedagógica, Colégio Adventista (2024)</p>

            <a href={"/William-Queiroz-RECOMENDACAO.pdf"} target='_blank'  className={styles.btn}>Ver recomendação <FaFileDownload className={styles.icodown} /></a>




            </motion.section>


        </div>



    </>)
}