import styles from './cardinfo.module.css'
import imagem from '../img/deslizar.png'
import {motion} from "motion/react"
import foto from '../img/foto.jpg'


export default function CardInfo() {

    return (<>

<h2 id= "sobre" className={styles.haltura}></h2>

        <div 
        
        className={styles.rollimg}>
            
            <div  className={styles.backimg}>
                <img src={imagem}  />
            </div>

            
            <div className={styles.degrade} >

                

                <motion.section
                
                // viewport={{ once: true }}
                style={{originY: 0}}
                initial = {{scaleY: 0, opacity: 0}}
        whileInView={{scaleY:1, opacity:1}}
  
        transition={{duration: 0.6, ease: "easeIn"}}
         className={styles.bloco}>
                    <div s>
                    <h2  className={styles.hsobre}>Sobre mim: </h2>
                    <p>Sou ex-professor de robótica educacional e formado em Engenharia da Computação. Atualmente em transição de carreira para o desenvolvimento web.</p>
                     <p>Busco meu primeiro emprego em vagas remotas como <strong>dev. júnior, estagiário ou trainee.</strong> Estou aberto ao aprendizado, sejam em novas linguagens, tecnologias, frontend ou backend.</p>
                     </div>

                    <img className={styles.foto4x4} src={foto}></img>

                </motion.section>
                
            </div>
            
        </div>
        


    </>)
}